import classes from "./AboutMe.module.css";
import RoundedRectangle from "../UI/RoundedRectangle";

import About from "../../assets/icons/about.png";
import Download from "../../assets/icons/download.png";

const AboutMe = () => {
  return (
    <section id="AboutMe" className={classes.aboutMe}>
      <RoundedRectangle top={false} title="more about me " titleIcon={About} />

      <div className={classes.aboutText}>
        <p>
          I always had a soft spot for web development, at the age of 11, I
          started building webpages in HTML.{"\n"}
          It didn't work out as a child and I became an Audio Engineer
          specialized in audio recording and studio acoustics.
        </p>

        <p>
          I taught myself coding, I'm a JavaScript enthusiast with quick
          learning abilities, diligent, ambitious and highly motivated.{"\n"}I
          enjoy creating web applications with React and know my way around with
          essential JavaScript libraries
        </p>

        <p>
          At my spare time I love watching Maccabi Haifa and Liverpool FC play,
          I love music and concerts, I love wine, cocktails and to have my
          friends over for a drink,{"\n"}I love fantasy stories such as Game of
          Thrones, The Lord of The Rings, and The Witcher and can't get enough
          of Marvel Cinematic Universe.
        </p>
      </div>
      <RoundedRectangle
        top={true}
        title="download resume"
        titleIcon={Download}
      />
    </section>
  );
};

export default AboutMe;
