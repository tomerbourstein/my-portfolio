import { Fragment, useEffect } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import useCheckScroll from "../../hooks/useCheckScroll";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const { ref, isMenuOpen, setIsMenuOpen } = useClickOutside(false);
  const { showMenu } = useCheckScroll(true);
  let activeMenu = isMenuOpen ? classes.open : null;
  let fade = showMenu ? classes.fadeOut : classes.fadeIn;

  const openMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div
      ref={ref}
      className={`${classes.quarterCircleTopRight} ${activeMenu} ${fade}`}
    >
      <div className={classes.hamburger} onClick={openMenu}>
        <div className={classes.hamburgerLine}></div>
        <div className={classes.hamburgerLine}></div>
        <div className={classes.hamburgerLine}></div>

        {isMenuOpen && (
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
        )}
      </div>
    </div>
  );
};

export default Navigation;
