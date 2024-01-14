import { Link, NavLink } from "react-router-dom";

const setIsActive = ({ isActive }) => (isActive ? "active-link" : "");

export const Header = () => {
  return (
    <div>
      <div className="header">
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "red" : "" })}
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          to="/users"
          style={({ isActive }) => ({ color: isActive ? "red" : "" })}
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};
