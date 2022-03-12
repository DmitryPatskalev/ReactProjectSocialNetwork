import { NavLink } from "react-router-dom";
import css from "./../Dialogs.module.css";
import kitty from "./../../Photo/kitty.jpg";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={css.dialog}>
      <span className={css.cat}>
        <img src={kitty} />
      </span>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
