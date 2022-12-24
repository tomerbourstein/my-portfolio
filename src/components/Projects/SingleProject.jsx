import { Fragment } from "react";
import classes from "./SingleProject.module.css";
const SingleProject = (props) => {
  const { title, details, image, style, reverse } = props;
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
            </div>
          </div>
          <div className={`${classes.projectPreview} ${classes[style]}`}></div>
        </div>
      ) : (
        <div className={classes.container}>
          <div className={`${classes.projectPreview} ${classes[style]}`}></div>
          <div className={classes.projectContent}>
            <div className={classes.projectTitle}>
              <h3>{title}</h3>
            </div>
            <div className={classes.projectDetails}>
              <p>{details}</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default SingleProject;
