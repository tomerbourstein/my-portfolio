import { Fragment } from "react";
import Pointer from "../../assets/icons/pointer.png";
import classes from "./SingleProject.module.css";
const SingleProject = (props) => {
  const { title, details, image, style, reverse, repo, app } = props;

  const project = (
    <div className={`${classes.container} ${classes.displayLargeScreen}`}>
      <div className={classes.projectContent}>
        <div className={classes.projectTitle}>
          <h3>{title}</h3>
        </div>
        <div className={classes.projectDetails}>
          <p>{details}</p>
          <a href={repo} target="_blank" rel="noreferrer noopener">
            <span></span> <button>repository</button>
          </a>
        </div>
      </div>
      <div className={`${classes.projectPreview} ${classes[style]}`}>
        <div className={classes.projectOnHoverButtons}>
          <a href={app} target="_blank" rel="noreferrer noopener">
            <img src={Pointer} alt="Visit App Icon" />
            check out the application
          </a>
        </div>
      </div>
    </div>
  );

  const projectSmallScreen = (
    <div className={`${classes.container} ${classes.displaySmallScreen}`}>
      <div className={classes.projectContent}>
        <div className={classes.projectTitle}>
          <h3>{title}</h3>
        </div>
        <div className={classes.projectDetails}>
          <p>{details}</p>
          <div className={classes.repositoryButton}>
            <a href={repo} target="_blank" rel="noreferrer noopener">
              <span></span> <button>repository</button>
            </a>
          </div>
          <div
            className={`${classes.projectOnHoverButtons} ${classes.projectOnHoverButtonsMobile}`}
          >
            <a href={repo} target="_blank" rel="noreferrer noopener">
              repository
            </a>
          </div>
          <div
            className={`${classes.projectOnHoverButtons} ${classes.projectOnHoverButtonsMobile}`}
          >
            <a href={app} target="_blank" rel="noreferrer noopener">
              application
            </a>
          </div>
        </div>
      </div>
      <div className={`${classes.projectPreview} ${classes[style]}`}>
        <div className={classes.projectOnHoverButtons}>
          <a href={app} target="_blank" rel="noreferrer noopener">
            <img src={Pointer} alt="Visit App Icon" />
            check out the application
          </a>
        </div>
      </div>
    </div>
  );

  const projectReverse = (
    <div className={`${classes.container} ${classes.displayLargeScreen}`}>
      <div className={`${classes.projectPreview} ${classes[style]}`}>
        <div className={classes.projectOnHoverButtons}>
          <a href={app} target="_blank" rel="noreferrer noopener">
            <img src={Pointer} alt="Visit App Icon" />
            check out the application
          </a>
        </div>
      </div>
      <div className={classes.projectContent}>
        <div className={classes.projectTitle}>
          <h3>{title}</h3>
        </div>
        <div className={classes.projectDetails}>
          <p>{details}</p>
          <a href={repo} target="_blank" rel="noreferrer noopener">
            <span></span> <button>repository</button>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      {!reverse ? project : projectReverse}
      {projectSmallScreen}
    </Fragment>
  );
};

export default SingleProject;
