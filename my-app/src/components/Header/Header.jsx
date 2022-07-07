import css from "./Header.module.css";
import coatOfArms from "./../Photo/CoatOfArms.jpg";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <div className={css.header}>
      <img src={coatOfArms} alt='coat'/>
      <div className={css.loginBlock}>
        {props.isAuth?props.login:
          <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </div>
  );
};
export default Header;
