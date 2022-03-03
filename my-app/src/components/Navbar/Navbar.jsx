import cs from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={cs.nav}>
      <div className={cs.item}>
        <a>Profile</a>
      </div>
      <div className={cs.item}>
        <a>Messages</a>
      </div>
      <div className={cs.item}>
        <a>News</a>
      </div>
      <div className={cs.item}>
        <a>Music</a>
      </div>
      <div className={cs.item}>
        <a>Settings</a>
      </div>
    </div>
  );
};
export default Navbar;
