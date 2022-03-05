import MyPost from "./MyPosts/MyPost";
import css from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={css.stadium}>
        <img src="https://media.gettyimages.com/photos/jun-1996-general-aerial-view-of-old-trafford-before-the-european-c-picture-id943836?s=612x612" />
      </div>
      <div>Ava+description</div>
      <MyPost />
    </div>
  );
};
export default Profile;
