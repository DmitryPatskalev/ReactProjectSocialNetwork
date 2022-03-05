import css from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={css.item}>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/375px-Manchester_United_FC_crest.png" />
        {props.message}
      </div>
      <div>
        <span>Like</span> {props.like}
      </div>
    </div>
  );
};

export default Post;
