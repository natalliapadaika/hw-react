import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const setIsActive = ({ isActive }) => (isActive ? "active-link" : "");

export const Header = () => {
const {theme, setTheme} = useContext(ThemeContext);

const HandleChange = () =>{
    setTheme (prevValue => prevValue === 'light'? 'dark':'light')
}

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
          to="/breeds"
          style={({ isActive }) => ({ color: isActive ? "red" : "" })}
        >
          About Dogs
        </NavLink>
        <NavLink
          to="/descr"  
          style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          
        >
          Descripthion of Dogs
        </NavLink>


<label className="switch">
        <input
        type="checkbox" id="checkbox" 
        checked = {theme === 'light'}
        onChange={HandleChange}
        />
       <div className="slider round"></div>  
        </label>
      </div>
    </div>
  );
};

