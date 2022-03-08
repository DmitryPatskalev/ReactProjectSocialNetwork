import { NavLink } from "react-router-dom";
import css from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={css.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={css.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Tanya" id="2" />
        <DialogItem name="Danik" id="3" />
        <DialogItem name="Igor" id="4" />
        <DialogItem name="Sergei" id="5" />
        <DialogItem name="Ira" id="6" />
      </div>
      <div className={css.messages}>
        <Message message="Hello!!" />
        <Message message="How are you today?" />
        <Message message="Thanks, fine! And you?" />
      </div>
    </div>
  );
};
export default Dialogs;
