"use client";import Link from'next/link';import Image from"next/image";import { useState } from "react";
function remove(item: string) {
alert('')
}



function basket(){
return(<>

<div className="row"><h1 className='head-text text-left'>Корзина </h1><Link href='/delivery'><p className='link'> вернуться к меню</p></Link></div>

<div className="center"><button className='basketBtn'>Оформить заказ</button></div></>)}

export default basket;