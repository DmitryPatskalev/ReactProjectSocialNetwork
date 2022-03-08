import css from "./Header.module.css";
import coatofarms from "./../Photo/CoatOfArms.jpg";

const Header = () => {
  return (
    <div className={css.header}>
      <img src={coatofarms} />
    </div>
  );
};
export default Header;
