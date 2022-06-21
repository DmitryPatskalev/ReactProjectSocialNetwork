import Post from "./Post/Post";
import css from "./MyPost.module.css";
import React from "react";

const MyPost = (props) => {
  let postsElement = props.posts.map((p,index) => (
    <Post key={index} message={p.message} like={p.like} />
  ));

  let onAddPost = () => {
    props.addPost();
  };
  let newPostElement = React.useRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
            placeholder="Write a message"
          ></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Click me</button>
        </div>
      </div>
      <div className={css.posts}>{postsElement}</div>
    </div>
  );
};
export default MyPost;
