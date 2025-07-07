import { NavListItemInterface } from "../interfaces";
import "../css/navListItem.css";

function NavListItem(props: NavListItemInterface) {
  return (
    <li>
      <a href={props.link}>{props.text}</a>
    </li>
  );
}
export default NavListItem;
