import css from "./Header.module.css";
import coatOfArms from "./../Photo/CoatOfArms.jpg";

const Header = () => {
  return (
    <div className={css.header}>
      <img src={coatOfArms} alt='coat'  />
    </div>
  );
};
export default Header;
