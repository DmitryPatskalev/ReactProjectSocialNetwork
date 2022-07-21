import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import css from "./Dialogs.module.css";
import React from "react";
import {Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((dialog,index) => (
    <DialogItem key={index} name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((message,index) => (
    <Message key={index}  message={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };
  if(!props.isAuth){
    return <Navigate to='/login'/>
  }

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogsElements}</div>
      <div className={css.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            value={newMessageBody}
            placeholder="Write a message"
            onChange={onNewMessageChange}
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Click me</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
