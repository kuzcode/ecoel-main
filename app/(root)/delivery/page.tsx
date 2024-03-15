"use client";
import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';

export interface Item {
    title: string;
    price: number;
    id: string;
    amount: string;
    added: number;
}

export const itemsList: Item[] = [
    {
        title: 'Twix Xtra',
        price: 3.3,
        id: "twix",
        amount: "82г",
        added: 0
    },
    {
        title: 'Skittles',
        price: 2.8,
        id: "skittles",
        amount: "38г",
        added: 0
    }
];

function Delivery() {
    const [items, setItems] = useState(itemsList);
    
    return (
        <>
            <h1 className='head-text text-left'>ЭкоЭл Delivery</h1>
            <p className='mt-3 text-base-regular text-light-2'>Доставим вкусную еду в любой уголок нашей школы</p>
            <Link href='/delivery/basket' className='floatRight'>
                <Image className="basket" id="basket" src='/assets/basket.svg' alt="basket" width={48} height={48}/>
            </Link>
            <div className="container">
                <h2 className='title2 head-text'>Сладости</h2>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <Image src={`/${item.id}.png`} alt={item.id} className="img" width={180} height={135}/>
                            <h6>{item.title} <span>· {item.amount}</span></h6>
                            <p>{item.price} BYN</p>
                            <button onClick={() => {
                                const newItems = items.map(i => 
                                    i.id === item.id ? { ...i, added: i.added + 1 } : i
                                );
                                setItems(newItems);
                                document.getElementById('basket')?.classList.add('activeBasket');
                            }}>
                                Добавить
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Delivery;
