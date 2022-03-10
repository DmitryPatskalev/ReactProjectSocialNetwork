import css from "./ProfileInfo.module.css";
import stadium from "./../../Photo/stadium.jpg";

const ProfileInfo = () => {
  return (
    <div>
      <div className={css.stadium}>
        <img src={stadium} />
      </div>
      <div className={css.descriptionBlock}>Ava+description</div>
    </div>
  );
};
export default ProfileInfo;
