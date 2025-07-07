import { SearchOutline } from "react-ionicons";
("react-ionicons");
import "../css/navSearchBar.css";

function NavSearchBar() {
  return (
    <div className="search">
      <input type="text" placeholder="search" />
      <SearchOutline cssClasses={"search-icon"}></SearchOutline>
    </div>
  );
}

export default NavSearchBar;
