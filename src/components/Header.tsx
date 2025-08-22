import { LoginButton } from ".";
import NavListItem from "./NavListItem";
import NavSearchBar from "./NavSearchBar";
import HeaderUserDropdown from "./HeaderUserDropdown";
import "../css/header.css";
import { HeaderInterface } from "../interfaces";

function Header(props: HeaderInterface) {
  return (
    <header className="header">
      <a href="/" className="logo">
        <i>Streamapp</i>
      </a>

      <ul className="nav">
        <NavListItem key={0} text="Home" link="/" />
        <NavListItem key={1} text="Trending" link="/trending" />
        <NavListItem key={2} text="Catálogo" link="/movies" />
      </ul>

      <NavSearchBar />

      {props.isLoggedIn ? (
        <HeaderUserDropdown user={props.user} />
      ) : (
        <LoginButton text="Iniciar Sesión" />
      )}
    </header>
  );
}

export default Header;
