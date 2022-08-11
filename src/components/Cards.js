import data from "../emoji-data/emoji.json";
import "./Cards.css";

function Cards(props) {
  const inputLow = props.input.toLowerCase();
  
  const filter = data.filter(
    (item) =>
      item.title.toLowerCase().includes(inputLow) ||
      item.keywords.includes(inputLow)
  );

  const list = filter.map((item) => (
    <li key={item.title} className="card">
      {item.symbol}
    </li>
  ));

  return <ul className="Cards">{list}</ul>;
}

export default Cards;
