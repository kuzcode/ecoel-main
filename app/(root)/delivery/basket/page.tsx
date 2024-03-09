"use client";import Link from'next/link';import Image from"next/image";import { useState } from "react";
import {items} from '../page' 
function remove(item: string) {
alert('')
}

function basket(){

const [show, setShow] = useState(() => showItems())

function showItems() {
    for (var i = 0; i < items.length; i++) {
        document.getElementById(items[i])?.classList.remove('displayNone');
        console.log('Функция была вызвана')
    }
}
showItems();
return(<><div className="row"><h1 className='head-text text-left'>Корзина </h1><Link href='/delivery'><p className='link'> вернуться к меню</p></Link></div>{items.length===0?(<p className="basketItem">Товары пока не добавлены :(</p>):(
<div className="container"><h2 className='title2 head-text'>В корзине:</h2><ul>
<li id='twix' className='displayNone'> <Image src="/twix.png"alt="Twix"className="img" width={180} height={135}/><h6>Twix Extreme <span>· 82г</span></h6><p>3,20 BYN</p><button onClick={()=>remove('twix')}>Убрать</button></li>
<li id='skittles' className='displayNone'><Image src="/skittles.png"alt="Skittles"className="img" width={180} height={135}/><h6>Skittles <span>· 38г</span></h6><p>2,70 BYN</p><button onClick={()=>remove('skittles')}>Убрать</button></li>
</ul></div>

)}


<div className="center"><button className='basketBtn'>Оформить заказ</button></div></>)}

export default basket;