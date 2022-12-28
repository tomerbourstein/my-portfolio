import { scrollToId } from "../../utils";

import classes from "./Header.module.css";
const sourceCode = `</>`;
const Header = () => {
  return (
    <header id="header">
      <div className={classes.container}>
        <div>
          <a href="/header" className={classes.homeButton}>
            <span> {sourceCode} </span>
          </a>
        </div>

        <div className={classes.menuButtons}>
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
    </header>
  );
};
export default Header;
