import Post from "./Post/Post";

const MyPost = () => {
  return (
    <div>
      My Post
      <div>
        <textarea></textarea>
        <button>Click me</button>
      </div>
      <Post />
    </div>
  );
};
export default MyPost;
