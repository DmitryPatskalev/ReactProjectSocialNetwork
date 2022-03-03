import cs from "./Post.module.css";
const Post = () => {
  return (
    <div>
      <div className={cs.item}>
        <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/375px-Manchester_United_FC_crest.png" />
        Post1
      </div>
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
