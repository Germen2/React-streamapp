import { LogInOutline } from "react-ionicons";
import "../css/button.css";
function Button(props: { text: string }) {
  return (
    <a href="/login" className="mainBtn">
      <LogInOutline cssClasses={"btn-icon"} /> {props.text}
    </a>
  );
}
export default Button;
