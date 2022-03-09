import Post from "./Post/Post";
import css from "./MyPost.module.css";

const MyPost = () => {
  let postDate = [
    { id: 1, message: "How is it going?", like: 15 },
    { id: 2, message: "Hi! I am fine, thank you!", like: 20 },
  ];

  let postsElement = postDate.map((posts) => (
    <Post message={posts.message} like={posts.like} />
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
