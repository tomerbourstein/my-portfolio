import classes from "./AboutMe.module.css";
import RoundedRectangle from "../UI/RoundedRectangle";
const AboutMe = () => {
  return (
    <section id="AboutMe" className={classes.aboutMe}>
      <RoundedRectangle top={false} title="ABOUT ME" />

      <div className={classes.aboutText}>
        <p>
          I always had a soft spot for web development, at the age of 11, I
          started building webpages in HTML.{"\n"}
          It didn't work out as a child, I became an Audio Engineer specialized
          in audio recording and studio acoustics.
        </p>

        <p>
          At my spare time I love music and concerts, I love wine, cocktails and
          to have my friends over for a drink,{"\n"}I love fantasy stories such
          as Game of Thrones, The Lord of The Rings, and The Witcher.
        </p>

        <p>
          I taught myself coding, I'm a JavaScript enthusiast with quick
          learning abilities, diligent, ambitious and highly motivated.{"\n"}I
          enjoy creating web applications with React and know my way around with
          essential JavaScript libraries
        </p>
      </div>
      <RoundedRectangle top={true} title="DOWNLOAD RESUME" />

    </section>
  );
};

export default AboutMe;
