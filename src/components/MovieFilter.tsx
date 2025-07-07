import { CategoriesInterface } from "../interfaces";
import "../css/filters.css";

function MovieFilter(props: CategoriesInterface) {
  return (
    <li
      key={props.id}
      className={`${props.active ? "active" : undefined}`}
      onClick={props.handleFilterMovie}
    >
      {props.name}
    </li>
  );
}

export default MovieFilter;
