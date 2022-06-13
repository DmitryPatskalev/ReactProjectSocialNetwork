import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./users-reducer";
import { combineReducers, legacy_createStore as createStore } from "redux";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  sidebar: sidebarReducer,
  usersPage: userReducer,
});
let store = createStore(reducers);

window.store = store;
export default store;
