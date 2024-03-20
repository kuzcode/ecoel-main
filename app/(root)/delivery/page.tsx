"use client";
import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';
import { Item, itemsList } from './data';

var newItemsList = itemsList;

export {newItemsList}

const Delivery = () => {
    const addToBasket = (id: string) => {
        var newItems = items.map(i => 
            i.id === id ? { ...i, added: i.added + 1 } : i
        );
        setItems(newItems);
        // Предполагается, что у вас есть функция для обновления корзины
        updateBasket(newItems);
        document.getElementById('basket')?.classList.add('activeBasket');
    }

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
            {newItemsList.map(item => (
                <li key={item.id}>
                    <Image src={`/${item.id}.png`} alt={item.title} className="img" width={180} height={135}/>
                    <h6>{item.title} <span>· {item.amount}</span></h6>
                    <p>{item.price} BYN</p>
                    <button onClick={() => addToBasket(item.id)}>
                        Добавить
                    </button>
                </li>
            ))}
        </ul>
            </div>
        </>
    );
};

const updateBasket = (items: Item[]) => {
    // Здесь должен быть ваш код для обновления корзины
    console.log('Корзина обновлена', items);
    newItemsList = items;
}

export default Delivery;
