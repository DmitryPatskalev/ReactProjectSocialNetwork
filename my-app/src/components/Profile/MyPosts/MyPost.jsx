import Post from "./Post/Post";
import css from "./MyPost.module.css";
import React from "react";
import {
  addPostActionCreater,
  updateNewPostActionCreator,
} from "./../../../redux/state";

const MyPost = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} like={p.like} />
  ));

  let addPost = () => {
    props.dispatch(addPostActionCreater());
  };
  let newPostElement = React.useRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostActionCreator(text));
  };

  return (
    <div className={css.postBlock}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Click me</button>
        </div>
      </div>
      <div className={css.posts}>{postsElement}</div>
    </div>
  );
};
export default MyPost;
