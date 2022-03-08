import MyPost from "./MyPosts/MyPost";
import css from "./Profile.module.css";
import stadium from "./../Photo/stadium.jpg";

const Profile = () => {
  return (
    <div>
      <div className={css.stadium}>
        <img src={stadium} />
      </div>
      <div>Ava+description</div>
      <MyPost />
    </div>
  );
};
export default Profile;
