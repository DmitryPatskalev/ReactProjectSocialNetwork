import Post from "./Post/Post";

const MyPost = () => {
  return (
    <div>
      My Post
      <div>
        <textarea></textarea>
        <button>Click me</button>
      </div>
      <Post message="How is it going?" like="15" />
      <Post message="Hi! I am fine, thank you!" like="20" />
    </div>
  );
};
export default MyPost;
