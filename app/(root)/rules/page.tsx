import Footer from "@/components/shared/Footer";

async function Rules() {

  return (
    <><p className="branchTitle">Правила форума Эко Эл</p>
    <div className="branchDiv">
      <p>1) Категорически запрещено: </p>
      <ul className="subList">
        <li><p>Обсуждать политику</p></li>
        <li><p>Спамить, флудить</p></li>
        <li><p>Притворяться другой личностью</p></li>
      </ul>
      <p>2) На форуме можно: </p>
      <ul className="subList">
        <li><p>Быть свободным</p></li>
        <li><p>Быть человеком</p></li>
      </ul>
    </div></>
  );
}

export default Rules;