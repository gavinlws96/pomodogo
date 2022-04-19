import Logo from "./Logo";
import HeaderOptions from "./HeaderOptions";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <div className={classes.header}>
        <Logo />
        <HeaderOptions settingHandler={props.settingHandler}/>
      </div>
      <div className={classes.divider} />
    </header>
  );
};

export default Header;
