import RoundedRectangle from "../UI/RoundedRectangle";
import SingleProject from "./SingleProject";
import classes from "./Projects.module.css";

import Witcher from "../../assets/the-witcher-preview.png";
import Quiz from "../../assets/quiz-game-preview.png";
import Cocktails from "../../assets/cocktails-app-preview.png";
import Kuperman from "../../assets/kuperman-preview.png";
import GitHub from "../../assets/icons/github-cloud.png";
import ProjectsIcon from "../../assets/icons/projects.png";

const myProjects = [
  {
    title: "Multiplayer Quiz",
    details:
      "A single page multiplayer online trivia quiz game built with React.JS.\n Using Material-UI and CSS 3 for design, and Google Firebase for database and authentication control.",
    image: Quiz,
    style: "quiz",
    reverse: false,
    repo: "https://github.com/tomerbourstein/quiz-game",
    app: "https://tomerbourstein.github.io/quiz-game/",
  },
  {
    title: "Cocktails Menu",
    details:
      "A single page based on different user's preferences, favorites and custom cocktails built with React.JS. \n Using Material-UI and CSS 3 for design, and Google Firebase for database and authentication control.",
    image: Cocktails,
    style: "cocktails",
    reverse: true,
    repo: "https://github.com/tomerbourstein/cocktail-menu-app",
    app: "https://tomerbourstein.github.io/cocktail-menu-app/",
  },
  {
    title: "Kuperman Cookies",
    details:
      "An e-Commerce single page for purchasing cookies built with React.JS. \n Using React Bootstrap and CSS 3 for design, and Google Firebase for database control.",
    image: Kuperman,
    style: "kuperman",
    reverse: false,
    repo: "https://github.com/tomerbourstein/food-app",
    app: "https://tomerbourstein.github.io/food-app/",
  },
  {
    title: "The Witcher Typing",
    details:
      "A single page typing contest with “The Witcher” theme built with React.JS. \n Using CSS 3 for design.",
    image: Witcher,
    style: "witcher",
    reverse: true,
    repo: "https://github.com/tomerbourstein/the-witcher",
    app: "https://tomerbourstein.github.io/the-witcher/",
  },
];

const buttonClickHandler = (event) => {
  window.open("https://github.com/tomerbourstein", "_blank");
};

const Projects = () => {
  return (
    <section id="projects" className={classes.projectsSection}>
      <RoundedRectangle
        top={false}
        title="featured projects"
        titleIcon={ProjectsIcon}
      />
      <div className={classes.wrapper}>
        {myProjects.map((project, index) => (
          <SingleProject
            key={index}
            title={project.title}
            details={project.details}
            style={project.style}
            reverse={project.reverse}
            repo={project.repo}
            app={project.app}
          />
        ))}
      </div>

      <div className={classes.gitHubButtonLargeScreen}>
        <RoundedRectangle
          onClick={buttonClickHandler}
          top={true}
          title="for additional projects"
          titleIcon={GitHub}
          subtitle="visit my GitHub"
          hover={true}
        />
      </div>

      <div className={classes.gitHubButtonSmallScreen}>
        <RoundedRectangle
          onClick={buttonClickHandler}
          top={true}
          title="more projects"
          titleIcon={GitHub}
          subtitle="GitHub"
          hover={true}
        />
      </div>
    </section>
  );
};

export default Projects;
