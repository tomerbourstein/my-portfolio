import { Fragment } from "react";
import classes from "./SingleProject.module.css";
const SingleProject = (props) => {
  const { title, details, image, style, reverse, repo, app } = props;
  return (
    <Fragment>
      {!reverse ? (
        <div className={classes.container}>
          <div className={classes.projectContent}>
            <div className={classes.projectTitle}>
              <h3>{title}</h3>
            </div>
            <div className={classes.projectDetails}>
              <p>{details}</p>
              <a href={repo} target="_blank" rel="noreferrer noopener">
                <button>repository</button>
              </a>
            </div>
          </div>
          <div className={`${classes.projectPreview} ${classes[style]}`}>
            <div className={classes.projectOnHoverButtons}>
              <a href={app} target="_blank" rel="noreferrer noopener">
                check out the application
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.container}>
          <div className={`${classes.projectPreview} ${classes[style]}`}>
            <div className={classes.projectOnHoverButtons}>
              <a href={app} target="_blank" rel="noreferrer noopener">
                check out the application
              </a>
            </div>
          </div>
          <div className={classes.projectContent}>
            <div className={classes.projectTitle}>
              <h3>{title}</h3>
            </div>
            <div
              className={`${classes.projectDetails} ${classes.projectDetailsRight}`}
            >
              <p>{details}</p>
              <a href={repo} target="_blank" rel="noreferrer noopener">
                <button>repository</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default SingleProject;
