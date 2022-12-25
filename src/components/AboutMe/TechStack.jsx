import classes from "./TechStack.module.css";
import StackImage from "../../assets/tech-stack.png";

import html from "../../assets/stack/html.svg";
import css from "../../assets/stack/css.svg";
import git from "../../assets/stack/git.svg";
import react from "../../assets/stack/react.svg";
import redux from "../../assets/stack/redux.svg";
import firebase from "../../assets/stack/firebase.svg";
import bootstrap from "../../assets/stack/bootstrap.svg";
import mui from "../../assets/stack/mui.svg";
import axios from "../../assets/stack/axios.svg";
import api from "../../assets/stack/api.svg";
import npm from "../../assets/stack/npm.svg";
import vscode from "../../assets/stack/vscode.svg";
import vite from "../../assets/stack/vite.svg";
import create from "../../assets/stack/create.svg";

const images = [
  { image: react, title: "React" },
  { image: git, title: "Git" },
  { image: firebase, title: "Firebase" },
  { image: bootstrap, title: "Bootstrap" },
  { image: html, title: "HTML" },
  { image: axios, title: "Axios" },
  { image: css, title: "CSS" },
  { image: redux, title: "Redux" },
  { image: mui, title: "Material-UI" },
  { image: api, title: "REST api" },
  { image: vite, title: "Vite" },
  { image: npm, title: "npm" },
  { image: vscode, title: "VS Code" },
  { image: create, title: "Create React" },
];
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

      <div className="sectionEdge">
        <div className={classes.roundedRectangle}>
          <h2>MY TECH STACK</h2>
          <div className={classes.container}>
            {images.map((image, index) => (
              <div key={index} className={classes.icons}>
                <span>{image.title}</span>
                <img  src={image.image} className={classes.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
