import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './GitButton.css'

function GitButton(props) {
  console.log(props.link)
  return (
      <div className="button">
        <a className="gitBtn__Left" href={props.link} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={props.symbol} className="icon"/>
          <span className="btnText">{props.text}</span>
        </a>
      <a className="gitBtn__Right" href={props.link} target="_blank" rel="noreferrer">
          <span className="btnText">49</span>
        </a>
    </div>
  );
}

export default GitButton;
