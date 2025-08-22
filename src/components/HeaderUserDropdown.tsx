import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/headerUserDropdown.css";
import { HeaderUserDropdownProps } from "../interfaces";

function HeaderUserDropdown(props: HeaderUserDropdownProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!props.user) return null;

  return (
    <div className="user-dropdown">
      <button className="user-dropdown-btn" onClick={() => setOpen(!open)}>
        {props.user.firstName.toUpperCase()} ▾
      </button>

      {open && (
        <ul className="user-dropdown-menu">
          <li onClick={() => navigate("/dashboard")}>Dashboard</li>
          <li onClick={handleLogout}>Cerrar sesión</li>
        </ul>
      )}
    </div>
  );
}

export default HeaderUserDropdown;
