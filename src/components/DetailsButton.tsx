import { InformationCircleOutline } from "react-ionicons";
import "../css/button.css";
import { DetailsButtonInterface } from "../interfaces";

function DetailsButton(props: DetailsButtonInterface) {
  return (
    <div>
      <a href={`/movie/${props.id}`} className="mainBtn">
        <InformationCircleOutline cssClasses={"btn-icon"} /> {props.text}
      </a>
    </div>
  );
}
export default DetailsButton;
