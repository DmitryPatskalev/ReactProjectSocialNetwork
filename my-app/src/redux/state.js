const ADD_POST = "ADD-POST";
const ADD_NEW_POST_TEXT = "ADD-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({
  type: ADD_NEW_POST_TEXT,
  newText: text,
});
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

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
  },

  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        like: 10,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === ADD_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 4, message: body });
      this._callSubscriber(this._state);
    }
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
