import { scrollToId } from "../../utils";

import classes from "./Header.module.css";
const openTag = `< `;
const slash = `/`;
const closingTag = `>`;
const closingTagAndSlash = ` />`;
const Header = () => {
  return (
    <header id="header">
      <div className={classes.container}>
        <div>
          <a href="/" className={classes.homeButton}>
            <span>{openTag} </span>
            <span> {slash} </span>
            <span> {closingTag} </span>
          </a>
        </div>

        <div className={classes.menuButtons}>
          <a
            href="/"
            onClick={(event) => scrollToId(event, "techStackSection")}
          >
            <div>{openTag} </div>
            <span>Stack</span>
            <div>{closingTagAndSlash}</div>
          </a>
          <a href="/" onClick={(event) => scrollToId(event, "AboutMe")}>
            <div>{openTag} </div>

            <span>About</span>
            <div>{closingTagAndSlash}</div>
          </a>
          <a href="/" onClick={(event) => scrollToId(event, "projects")}>
            <div>{openTag} </div>

            <span>Projects</span>
            <div>{closingTagAndSlash}</div>
          </a>
          <a href="/" onClick={(event) => scrollToId(event, "footer")}>
            <div>{openTag} </div>

            <span>Contact</span>
            <div>{closingTagAndSlash}</div>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
