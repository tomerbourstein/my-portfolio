import { useState } from "react";
import classes from "./Navigation.module.css";
import useClickOutside from "../../hooks/useClickOutside";
const Navigation = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { ref, isMenuOpen, setIsMenuOpen } = useClickOutside(false);
  let activeMenu = isMenuOpen ? classes.open : null;

  const openMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div ref={ref} className={`${classes.quarterCircleTopRight} ${activeMenu}`}>
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
