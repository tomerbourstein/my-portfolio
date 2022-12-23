import classes from "./RoundedRectangle.module.css";

const RoundedRectangle = (props) => {
  const { top } = props;
  const style = top
    ? classes.roundedRectanglePlaceTop
    : classes.roundedRectanglePlaceBottom;
  return <div className={`${classes.roundedRectangle} ${style}`}></div>;
};

export default RoundedRectangle;
