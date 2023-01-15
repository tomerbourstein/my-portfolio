import classes from "./AboutMe.module.css";
import useCheckScroll from "../../hooks/useCheckScroll";
import RoundedRectangle from "../UI/RoundedRectangle";
import About from "../../assets/icons/about.png";
import Download from "../../assets/icons/download.png";
import cv from "../../../public/files/tb-cv-dec-22.pdf";

const AboutMe = () => {
  const { firstP, secondP, thirdP } = useCheckScroll(false);
  let playAnimationFirst = firstP ? classes.slideIn : classes.slideOut;
  let playAnimationSecond = secondP ? classes.slideIn : classes.slideOut;
  let playAnimationThird = thirdP ? classes.slideIn : classes.slideOut;

  const downloadHandler = () => {
    var link = document.createElement("a");
    link.href = cv;
    link.download = "Tomer-2023.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const contentLargeScreen = (
    <div className={`${`${classes.aboutText} `} ${classes.contentLargeScreen}`}>
      <p className={`${playAnimationFirst}`}>
        I always had a soft spot for web development, at the age of 11, I
        started building webpages in HTML.{"\n"}
        It didn't work out as a child and I became an Audio Engineer specialized
        in audio recording and studio acoustics.
      </p>

      <p className={`${playAnimationSecond}`}>
        I taught myself coding, I'm a JavaScript enthusiast with quick learning
        abilities, diligent, ambitious and highly motivated.{"\n"}I enjoy
        creating web applications with React and know my way around with
        essential JavaScript libraries
      </p>

      <p className={`${playAnimationThird}`}>
        At my spare time I love watching Maccabi Haifa and Liverpool FC play, I
        love music and concerts, I love wine, cocktails and to have my friends
        over for a drink,{"\n"}I love fantasy stories such as Game of Thrones,
        The Lord of The Rings, and The Witcher and can't get enough of Marvel
        Cinematic Universe.
      </p>
    </div>
  );

  const contentSmallScreen = (
    <div className={`${`${classes.aboutText} `} ${classes.contentSmallScreen} `}>
      <p>
        I always had a soft spot for web development, at the age of 11, I
        started building webpages in HTML.{"\n"}
        It didn't work out as a child and I became an Audio Engineer specialized
        in audio recording and studio acoustics.
      </p>

      <p>
        I taught myself coding, I'm a JavaScript enthusiast with quick learning
        abilities, diligent, ambitious and highly motivated.{"\n"}I enjoy
        creating web applications with React and know my way around with
        essential JavaScript libraries
      </p>

      <p>
        At my spare time I love watching Maccabi Haifa and Liverpool FC play, I
        love music and concerts, I love wine, cocktails and to have my friends
        over for a drink,{"\n"}I love fantasy stories such as Game of Thrones,
        The Lord of The Rings, and The Witcher and can't get enough of Marvel
        Cinematic Universe.
      </p>
    </div>
  );
  return (
    <section id="AboutMe" className={classes.aboutMe}>
      <RoundedRectangle top={false} title="more about me " titleIcon={About} />
      {contentLargeScreen}
      {contentSmallScreen}
      <RoundedRectangle
        onClick={downloadHandler}
        top={true}
        title="download resume"
        titleIcon={Download}
        hover={true}
      />
    </section>
  );
};

export default AboutMe;
