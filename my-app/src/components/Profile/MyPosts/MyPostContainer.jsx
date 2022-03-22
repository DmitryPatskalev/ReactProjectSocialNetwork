import React from "react";
import MyPost from "./MyPost";
import {
  addPostActionCreater,
  updateNewPostActionCreator,
} from "../../../redux/profile-reducer";

const MyPostContainer = (props) => {
  let state = props.store.getState();
  let onAddPost = () => {
    props.store.dispatch(addPostActionCreater());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostActionCreator(text));
  };

  return (
    <MyPost
      updateNewPostText={onPostChange}
      addPost={onAddPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};
export default MyPostContainer;
