import Post from "./Post/Post";
import css from "./MyPost.module.css";

const MyPost = () => {
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
      <div className={css.posts}>
        <Post message="How is it going?" like="15" />
        <Post message="Hi! I am fine, thank you!" like="20" />
      </div>
    </div>
  );
};
export default MyPost;
