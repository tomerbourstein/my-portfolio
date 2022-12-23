import classes from "./RoundedRectangle.module.css";

const RoundedRectangle = (props) => {
  const { top, title } = props;

  const style = top
    ? classes.roundedRectanglePlaceTop
    : classes.roundedRectanglePlaceBottom;
  return <div className={`${classes.roundedRectangle} ${style}`}>
    <h2>{title}</h2>
  </div>;
};

export default RoundedRectangle;
