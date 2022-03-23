import React from "react";
import MyPost from "./MyPost";
import {
  addPostActionCreater,
  updateNewPostActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let onAddPost = () => {
          store.dispatch(addPostActionCreater());
        };
        let onPostChange = (text) => {
          store.dispatch(updateNewPostActionCreator(text));
        };
        return (
          <MyPost
            updateNewPostText={onPostChange}
            addPost={onAddPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostContainer;
