import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import {v1} from "uuid";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: v1(), message: "How is it going?", like: 15 },
        { id: v1(), message: "Hi! I am fine, thank you!", like: 20 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: v1(), name: "Dima" },
        { id: v1(), name: "Tanya" },
        { id: v1(), name: "Danik" },
        { id: v1(), name: "Igor" },
        { id: v1(), name: "Sergei" },
        { id: v1(), name: "Ira" },
      ],
      messages: [
        { id: v1(), message: "Hello!!" },
        { id: v1(), message: "How are you today?" },
        { id: v1(), message: "Thanks, fine! And you?" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },

  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
