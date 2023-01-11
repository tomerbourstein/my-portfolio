import classes from "./RoundedRectangle.module.css";

const RoundedRectangle = (props) => {
  const { top, title, titleIcon, subtitle, subIcon, onClick } = props;

  const style = top
    ? classes.roundedRectanglePlaceTop
    : classes.roundedRectanglePlaceBottom;
  const buttonStyle = onClick ? classes.pointer : null;
  return (
    <div className="sectionEdge">
      <div
        className={`${classes.roundedRectangle} ${style} ${buttonStyle}`}
        onClick={() => onClick()}
      >
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
