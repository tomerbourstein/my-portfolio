import { useState } from "react";
import classes from "./Navigation.module.css";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  let activeMenu = isOpen ? classes.open : null;

  const openMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`${classes.quarterCircleTopRight} ${activeMenu}`}>
      <div className={classes.hamburger} onClick={openMenu}>
        <div className={classes.hamburgerLine}></div>
        <div className={classes.hamburgerLine}></div>
        <div className={classes.hamburgerLine}></div>

        <div className={`${classes.menuButtons} `}>
          <a href="">
            <span>Stack</span>
          </a>
          <a href="">
            <span>About</span>
          </a>
          <a href="">
            <span>Projects</span>
          </a>
          <a href="">
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
