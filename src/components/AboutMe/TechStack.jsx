import classes from "./TechStack.module.css";
import StackImage from "../../assets/tech-stack.png";
import RoundedRectangle from "../UI/RoundedRectangle";

const TechStack = () => {
  return (
    <section id="techStackSection" className={classes.techStackSection}>
      <div>
        <img
          className={classes.techStack}
          src={StackImage}
          alt="PC Screen with Tech Logos"
        />
      </div>

      <RoundedRectangle top={true} title="MY TECH STACK" logos={true} />
    </section>
  );
};

export default TechStack;
