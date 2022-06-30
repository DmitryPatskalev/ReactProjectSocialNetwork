import css from "./ProfileInfo.module.css";
import stadium from "./../../Photo/stadium.jpg";
import Preloader from "../../common/preloader/Preloader";


const ProfileInfo = (props) => {
   if(!props.profile){
      return <Preloader/>
   }
  return (
    <div>
      <div className={css.stadium}>
        <img src={stadium} alt='stadium' />
      </div>
      <div className={css.descriptionBlock}>
         <img src={props.profile.photos.large} alt='ava'/>
         Ava+description</div>
    </div>
  );
};
export default ProfileInfo;
