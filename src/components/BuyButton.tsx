import { CardOutline } from "react-ionicons";
import "../css/button.css";
function Button(props: { text: string }) {
  return (
    <a href="#" className="mainBtn">
      <CardOutline cssClasses={"btn-icon"} /> {props.text}
    </a>
  );
}
export default Button;
