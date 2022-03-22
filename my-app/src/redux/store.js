import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "How is it going?", like: 15 },
        { id: 2, message: "Hi! I am fine, thank you!", like: 20 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Tanya" },
        { id: 3, name: "Danik" },
        { id: 4, name: "Igor" },
        { id: 5, name: "Sergei" },
        { id: 6, name: "Ira" },
      ],
      messages: [
        { id: 1, message: "Hello!!" },
        { id: 2, message: "How are you today?" },
        { id: 3, message: "Thanks, fine! And you?" },
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
