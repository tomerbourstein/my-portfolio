import classes from "./HeyThere.module.css";
import Avatar from "../../assets/profile-disney.jpeg";
const capitalize = (str) => str.split('+').map(s => s[0].toUpperCase() + s.slice(1)).join(' ')
const HeyThere = ({companyName}) => {
  return (
    <section className={classes.heyThere}>
      <h1> Frontend, JavaScript, React Developer</h1>
      <div>
        <p>Hey {companyName? capitalize(companyName) : 'there'}, I'm Tomer, a self-taught JavaScript enthusiast</p>
        <p>I enjoy creating web apps with React</p>
      </div>
      <div>
        <img src={Avatar} alt="Tomer Bourstein Avatar" />
        <div className={classes.shadow}></div>
      </div>
      <span>keep scrolling</span>
    </section>
  );
};

export default HeyThere;
