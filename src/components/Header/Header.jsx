import classes from "./Header.module.css";
import Logo from "../../assets/TB-dark-blue-on-off-white.png";
const Header = () => {
  return (
    <header id="header">
      <div className={classes.container}>
        <div>
          <a href="/header">
            <img src={Logo} alt="TB, Tomer Bourstein Logo" />
          </a>
        </div>

        <div className={classes.menuButtons}>
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
    </header>
  );
};
export default Header;
