import classes from "./RoundedRectangle.module.css";

const RoundedRectangle = (props) => {
  const { top, title, titleIcon, subtitle, subIcon } = props;

  const style = top
    ? classes.roundedRectanglePlaceTop
    : classes.roundedRectanglePlaceBottom;
  return (
    <div className="sectionEdge">
      <div className={`${classes.roundedRectangle} ${style}`}>
        <div className={classes.mainContent}>
          {titleIcon ? (
            <span>
              <img src={titleIcon} alt={titleIcon} />
            </span>
          ) : null}
          <div className={classes.subContent}>
            <h2>{title}</h2>
            {subtitle ? <span> {subtitle} </span> : null}
            {subIcon ? (
              <span>
                <img src={subIcon} alt={subIcon} />
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundedRectangle;
