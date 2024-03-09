"use client";import Link from'next/link';import Image from"next/image";
export var items:string[]=[];
function add(item:string){items.push(item);document.getElementById('basket')?.classList.add('activeBasket');console.log(items)}function delivery(){return(<><h1 className='head-text text-left'>ЭкоЭл Delivery</h1><p className='mt-3 text-base-regular text-light-2'>Доставим вкусную еду в любой уголок нашей школы</p><Link href='/delivery/basket' className='floatRight'><Image className="basket" id="basket" src='/assets/basket.svg' alt="basket" width={48} height={48}/></Link><div className="container"><h2 className='title2 head-text'>Сладости</h2><ul>
<li><Image src="/twix.png"alt="Twix"className="img" width={180} height={135}/><h6>Twix Extreme <span>· 82г</span></h6><p>3,20 BYN</p><button onClick={()=>add('twix')}> Добавить</button></li>
<li><Image src="/skittles.png"alt="Skittles"className="img" width={180} height={135}/><h6>Skittles <span>· 38г</span></h6><p>2,70 BYN</p><button onClick={()=>add('skittles')}> Добавить</button></li>
</ul></div><div className="container"><h2 className='title2 head-text'>Напитки</h2><ul><li> <Image src="/cola.png" alt="Cola" className="img" width={180} height={135}/> <h6>Coca-cola <span>· 0,5л</span></h6><p>3,20 BYN</p><button onClick={()=>add('Coca-cola; ')}> Добавить</button></li></ul></div></>);
}
export default delivery;