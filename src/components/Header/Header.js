import Logo from "./Logo";
import HeaderOptions from "./HeaderOptions";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={classes.header}>
        <Logo />
        <HeaderOptions />
      </div>
      <div className={classes.divider} />
    </header>
  );
};

export default Header;
