import MyPost from "./MyPosts/MyPost";
import cs from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={cs.content}>
      <div>
        <img src="https://media.gettyimages.com/photos/jun-1996-general-aerial-view-of-old-trafford-before-the-european-c-picture-id943836?s=612x612" />
      </div>
      <div>Ava+description</div>
      <MyPost />
    </div>
  );
};
export default Profile;
