import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="sectionEdge">
        <div className={classes.roundedRectangle}>
          <h2>Get in touch</h2>
          <div className={classes.icons}>
            <span>icon</span>
            <span>icon</span>
            <span>icon</span>
            <span>icon</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
