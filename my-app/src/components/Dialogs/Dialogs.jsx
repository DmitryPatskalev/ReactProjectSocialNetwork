import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import css from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.messages.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogsElements}</div>
      <div className={css.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
