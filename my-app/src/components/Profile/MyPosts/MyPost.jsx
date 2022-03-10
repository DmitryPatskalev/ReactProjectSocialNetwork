import Post from "./Post/Post";
import css from "./MyPost.module.css";

const MyPost = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} like={p.like} />
  ));

  return (
    <div className={css.postBlock}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Click me</button>
        </div>
      </div>
      <div className={css.posts}>{postsElement}</div>
    </div>
  );
};
export default MyPost;
