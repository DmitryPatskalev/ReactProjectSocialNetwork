import { NavLink } from "react-router-dom";
import css from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        <div className={css.dialog}>
          <NavLink to="/dialogs/1">Dima</NavLink>
        </div>
        <div className={css.dialog}>
          <NavLink to="/dialogs/2">Tanya</NavLink>
        </div>
        <div className={css.dialog}>
          <NavLink to="/dialogs/3">Danik</NavLink>
        </div>
        <div className={css.dialog}>
          <NavLink to="/dialogs/4">Igor</NavLink>
        </div>
        <div className={css.dialog}>
          <NavLink to="/dialogs/5">Sergei</NavLink>
        </div>
        <div className={css.dialog}>
          <NavLink to="/dialogs/6">Ira</NavLink>
        </div>
      </div>
      <div className={css.messages}>
        <div className={css.message}>Hello!!</div>
        <div className={css.message}>How are you today?</div>
        <div className={css.message}>Thanks, fine! And you?</div>
      </div>
    </div>
  );
};
export default Dialogs;
