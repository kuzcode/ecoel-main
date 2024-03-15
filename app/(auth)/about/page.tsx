"use client"
import{redirect}from"next/navigation";
import"./about.css"
function about(){
return(
<><div className="main">
<h1 className="title3">ЭкоЭл <span>Journal</span></h1>
<p className="subTitle">новая эра нашей школы</p>
<div className="buttons">
<button className="btn1" onClick={() => redirect("/sign-in")}>Войти</button>
<button className="btn2">Контакт</button>
</div>
<div className="second">
<h3 className="title4">Инфа о сайте ⬇️</h3>
<h4 className="title5">Для чего нужен наш сайт?</h4>
<ul><li>Общение учеников школы в одном месте — Коммуникативно. Интересно. Вайбово.</li>
<li>Покупка еды в разы дешевле, чем в Mustang'е — Легко. Недорого. Вкусно.</li>
<li>Анонимное обсуждение, публикации без никнейма автора — Анонимно. Хитро. Навсегда.</li>
<li>Объявлние школьных конкурсов и событий — Громко. Весело. С призами.</li></ul>
<h4 className="title5">Для чего нужен наш сайт?</h4><ul>
<li>Общение учеников школы в одном месте — Коммуникативно. Интересно. Вайбово.</li>
<li>Покупка еды в разы дешевле, чем в Mustang'е — Легко. Недорого. Вкусно.</li>
<li>Анонимное обсуждение, публикации без никнейма автора — Анонимно. Хитро. Навсегда.</li>
<li>Объявлние школьных конкурсов и событий — Громко. Весело. С призами.</li></ul>
<div className="buttons">
<button className="btn1 btn3">Убедили? Регистрируйся!</button>
</div></div>
<div className="footer">
<h5>ЭкоЭл <span>Journal</span></h5>
<a href="mailto:ecoelforum@gmail.com">ecoelforum@gmail.com</a>
</div></div></>)}
export default about;