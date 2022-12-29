import { scrollToId } from "../../utils";

import classes from "./Header.module.css";
const sourceCode = `</>`;
const openTag = `< `;
const closingTag = ` />`;
const Header = () => {
  return (
    <header id="header">
      <div className={classes.container}>
        <div>
          <a href="/" className={classes.homeButton}>
            <span> {sourceCode} </span>
          </a>
        </div>

        <div className={classes.menuButtons}>
          <a
            href="/"
            onClick={(event) => scrollToId(event, "techStackSection")}
          >
            <div>{openTag} </div>
            <span>Stack</span>
            <div>{closingTag}</div>
          </a>
          <a href="/" onClick={(event) => scrollToId(event, "AboutMe")}>
            <div>{openTag} </div>

            <span>About</span>
            <div>{closingTag}</div>
          </a>
          <a href="/" onClick={(event) => scrollToId(event, "projects")}>
            <div>{openTag} </div>

            <span>Projects</span>
            <div>{closingTag}</div>
          </a>
          <a href="/" onClick={(event) => scrollToId(event, "footer")}>
            <div>{openTag} </div>

            <span>Contact</span>
            <div>{closingTag}</div>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
