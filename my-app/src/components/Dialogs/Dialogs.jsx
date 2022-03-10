import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import css from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsDate = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Tanya" },
    { id: 3, name: "Danik" },
    { id: 4, name: "Igor" },
    { id: 5, name: "Sergei" },
    { id: 6, name: "Ira" },
  ];

  let messagesDate = [
    { id: 1, message: "Hello!!" },
    { id: 2, message: "How are you today?" },
    { id: 3, message: "Thanks, fine! And you?" },
  ];

  let dialogsElements = dialogsDate.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messagesDate.map((message) => (
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
