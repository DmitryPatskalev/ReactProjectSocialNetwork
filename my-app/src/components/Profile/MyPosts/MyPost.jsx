import Post from "./Post/Post";
import css from "./MyPost.module.css";
import React from "react";

const MyPost = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} like={p.like} />
  ));

  let postAdd = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };
  let newPostElement = React.useRef();

  return (
    <div className={css.postBlock}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            placeholder="Write a message"
          ></textarea>
        </div>
        <div>
          <button onClick={postAdd}>Click me</button>
        </div>
      </div>
      <div className={css.posts}>{postsElement}</div>
    </div>
  );
};
export default MyPost;
