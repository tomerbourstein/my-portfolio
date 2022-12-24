import classes from "./RoundedRectangle.module.css";

const RoundedRectangle = (props) => {
  const { top, title, subtitle, icon } = props;

  const style = top
    ? classes.roundedRectanglePlaceTop
    : classes.roundedRectanglePlaceBottom;
  return (
    <div className="sectionEdge">
      <div className={`${classes.roundedRectangle} ${style}`}>
        <h2>{title}</h2>
        <div className={classes.subContent}>
          {subtitle ? <span> {subtitle} </span> : null}
          {icon ? (
            <span>
              <img src={icon} alt={icon} />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RoundedRectangle;
