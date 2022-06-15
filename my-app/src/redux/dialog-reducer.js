import {v1} from "uuid";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: v1(), message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogReducer;
