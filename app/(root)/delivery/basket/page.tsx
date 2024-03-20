"use client";import Link from'next/link';import Image from"next/image";import { useState } from "react";
import { itemsList } from '../data';

function basket(){
    const [items, setItems] = useState(
        itemsList
    );
    for (var i = 0; i < items.length; i++) {
        if (items[i].added == 0){
            setItems(
            items.filter(a =>
        a.id !== items[i].id))}
    }
    
    for(var i=0; i < items.length; i++){
        if (items[i].added >= 1) {

return(<>
<div className="row"><h1 className='head-text text-left'>Корзина </h1><Link href='/delivery'><p className='link'> вернуться к меню</p></Link></div>


        <><div className="container"><h2 className='title2 head-text'>В корзине:</h2>
            <ul>
                {items.map(item => (

                    <li key={item.id} id={item.id}><Image src={`/${item.id}.png`} alt={item.id} className="img" width={180} height={135} /><h6>{item.title} <span>· {item.amount}</span></h6><p>{item.price} BYN</p>
                        <button onClick={() => item.added = item.added - 1}>Убрать ({item.added})</button></li>
                ))}
            </ul>
        </div><div className="center"><button className='basketBtn'>Оформить заказ</button></div></></>)}
    else {
        return (
            <><div className="row"><h1 className='head-text text-left'>Корзина </h1><Link href='/delivery'><p className='link'> вернуться к меню</p></Link></div><p className="basketItem">Товары пока не добавлены :(</p></>
        )
    }
}}


export default basket;