import { Link, NavLink } from "react-router-dom";


export const Header = () => {
  return (
    <div>
      <div className="header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
    </div>
  );
};
