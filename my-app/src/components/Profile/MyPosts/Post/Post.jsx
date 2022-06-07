import css from "./Post.module.css";
import emblem from "./../../../Photo/MU.jpg";

const Post = (props) => {
  return (
    <div className={css.item}>
      <img src={emblem} alt='emblem' />
      {props.message}
      <div>
        <span>Like</span> {props.like}
      </div>
    </div>
  );
};

export default Post;
