import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import css from "./Dialogs.module.css";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));
  let addPost = () => {
    alert(addPostElement.current.value);
  };
  let addPostElement = React.useRef();

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogsElements}</div>
      <div className={css.messages}>
        {messagesElements}
        <div>
          <textarea
            placeholder="Write a message"
            ref={addPostElement}
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Click me</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
