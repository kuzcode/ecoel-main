"use client";import Link from'next/link';import Image from"next/image";
import { newItemsList } from '../page';
import { useState } from 'react';

const Basket = () => {

console.log(newItemsList)

return(<>
<div className="row"><h1 className='head-text text-left'>Корзина </h1><Link href='/delivery'><p className='link'> вернуться к меню</p></Link></div>
        <><div className="container"><h2 className='title2 head-text'>В корзине:</h2>
            <ul>
                {newItemsList.map(product => (

                    <li key={product.id} id={product.id}><Image src={`/${product.id}.png`} alt={product.id} className="img" width={180} height={135} /><h6>{product.title} <span>· {product.amount}</span></h6><p>{product.price} BYN</p>
                        <button onClick={() => product.added = product.added - 1}>Убрать ({product.added})</button></li>
                ))}
            </ul>
        </div><div className="center"><button className='basketBtn'>Оформить заказ</button></div></></>)}
    


export default Basket;