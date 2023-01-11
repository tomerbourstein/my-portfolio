import useClickOutside from "../../hooks/useClickOutside";
import useCheckScroll from "../../hooks/useCheckScroll";
import { scrollToId } from "../../utils";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const { ref, isOpen, setIsOpen, listItemsShow, setListItemsShow } =
    useClickOutside(false);
  const { pageScrollTop } = useCheckScroll();

  let activeMenu = isOpen ? classes.open : classes.notOpen;
  let fade = pageScrollTop ? classes.fadeOut : classes.fadeIn;
  let entranceAnimation = listItemsShow ? classes.slideIn : classes.slideOut;
  let hamburgerAnimation = isOpen ? classes.clicked : classes.notClicked;

  const openMenu = () => {
    setListItemsShow((prevStateList) => !prevStateList);
    setIsOpen((prevStateMenu) => {
      return !prevStateMenu;
    });
  };

  return (
    <div ref={ref} className={`${classes.quarterCircleTopRight} ${fade}`}>
      <div className={`${classes.collapsable} ${activeMenu}`}>
        <div className={classes.hamburger} onClick={openMenu}>
          <div
            className={`${classes.hamburgerLine} ${hamburgerAnimation}`}
          ></div>
          <div
            className={`${classes.hamburgerLine} ${hamburgerAnimation}`}
          ></div>
          <div
            className={`${classes.hamburgerLine} ${hamburgerAnimation}`}
          ></div>

          <div className={`${classes.menuButtons} ${entranceAnimation}`}>
            <a
              href="/"
              onClick={(event) => scrollToId(event, "techStackSection")}
            >
              <span>Stack</span>
            </a>
            <a href="/" onClick={(event) => scrollToId(event, "AboutMe")}>
              <span>About</span>
            </a>
            <a href="/" onClick={(event) => scrollToId(event, "projects")}>
              <span>Projects</span>
            </a>
            <a href="/" onClick={(event) => scrollToId(event, "footer")}>
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
