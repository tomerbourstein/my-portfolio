import useClickOutside from "../../hooks/useClickOutside";
import useCheckScroll from "../../hooks/useCheckScroll";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const { ref, isMenuOpen, setIsMenuOpen, listItemsShow, setListItemsShow } =
    useClickOutside(false);
  const { pageScrollTop } = useCheckScroll(true);

  let activeMenu = isMenuOpen ? classes.open : classes.notOpen;
  let fade = pageScrollTop ? classes.fadeOut : classes.fadeIn;
  let entranceAnimation = listItemsShow ? classes.slideIn : classes.slideOut;
  let hamburgerAnimation = isMenuOpen ? classes.clicked : classes.notClicked;

  const openMenu = () => {
    setListItemsShow((prevStateList) => !prevStateList);
    setIsMenuOpen((prevStateMenu) => {
      return !prevStateMenu;
    });
  };

  const scrollToId = (event, id) => {
    event.preventDefault();
    let section = document.getElementById(id);
    section && section.scrollIntoView({ behavior: "smooth" }, true);
  };
  return (
    <div
      ref={ref}
      className={`${classes.quarterCircleTopRight} ${activeMenu} ${fade}`}
    >
      <div className={classes.hamburger} onClick={openMenu}>
        <div className={`${classes.hamburgerLine} ${hamburgerAnimation}`}></div>
        <div className={`${classes.hamburgerLine} ${hamburgerAnimation}`}></div>
        <div className={`${classes.hamburgerLine} ${hamburgerAnimation}`}></div>

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
  );
};

export default Navigation;
