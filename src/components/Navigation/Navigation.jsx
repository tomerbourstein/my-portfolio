import { Fragment, useEffect, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import useCheckScroll from "../../hooks/useCheckScroll";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const [listItemsShow, setListItemsShow] = useState(false);
  const { ref, isMenuOpen, setIsMenuOpen } = useClickOutside(false);
  const { pageScrollTop } = useCheckScroll(true);
  let activeMenu = isMenuOpen ? classes.open : classes.notOpen;
  let fade = pageScrollTop ? classes.fadeOut : classes.fadeIn;
  let entranceAnimation = listItemsShow ? classes.slideIn : classes.slideOut;
  const openMenu = () => {
    setIsMenuOpen((prevStateMenu) => {
      // setTimeout(() => {
        setListItemsShow((prevStateList) => !prevStateList);
      // }, 500);
      return !prevStateMenu;
    });
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

        {/* {isMenuOpen && ( */}
        <div className={`${classes.menuButtons} ${entranceAnimation}`}>
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
        {/* )} */}
      </div>
    </div>
  );
};

export default Navigation;
