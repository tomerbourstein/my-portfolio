import { useState } from "react";
import useCollapse from "../../hooks/useCollapse";

import classes from "./Footer.module.css";
import EmailCloud from "../../assets/icons/email-cloud.png";
import WhatsappCloud from "../../assets/icons/whatsapp-cloud.png";
import LinkedinCloud from "../../assets/icons/linkedin-cloud.png";
import Avatar from "../../assets/profile-disney.jpeg";
import ProjectsCategory from "../../assets/icons/projects-category.png";
import SocialsCategory from "../../assets/icons/socials-category.png";

import BulletFooter from "../../assets/icons/bullet-footer.png";
import GithubFooter from "../../assets/icons/github-footer.png";
import LiknedinFooter from "../../assets/icons/linkedin-footer.png";
import WhatsappFooter from "../../assets/icons/whatsapp-footer.png";
import EmailFooter from "../../assets/icons/email-footer.png";
import FloatingCard from "../UI/FloatingCard";

const Footer = () => {
  const [messageIsOpen, setMessageIsOpen] = useState(false);
  const [playCloseAnimation, setPlayCloseAnimation] = useState(false);

  const {
    setOpen: setOpenProjects,
    collapse: collapseProjects,
    clicked: clickedProjects,
  } = useCollapse();

  const {
    setOpen: setOpenSocials,
    collapse: collapseSocials,
    clicked: clickedSocials,
  } = useCollapse();

  const toggleContactMessageHandler = () => {
    setPlayCloseAnimation(true);

    setTimeout(() => {
      setMessageIsOpen((prevState) => {
        if (!prevState) setPlayCloseAnimation(false);

        return !prevState;
      });
    }, 190);
  };

  const getInTouch = [
    {
      title: "Email Contact",
      icon: EmailCloud,
      url: null,
      onClick: toggleContactMessageHandler,
    },
    {
      title: "WhatsApp Contact",
      icon: WhatsappCloud,
      url: "https://wa.me/00972544498337",
      onClick: null,
    },
    {
      title: "LinkedIn Contact",
      icon: LinkedinCloud,
      url: "https://www.linkedin.com/in/tomer-bourstein/",
      onClick: null,
    },
  ];

  const projects = [
    {
      title: "The Witcher",
      content:
        "A single page typing contest with “The Witcher” theme built with React.JS.",
      icon: BulletFooter,
      url: "https://github.com/tomerbourstein/the-witcher",
    },
    {
      title: "Cocktails Menu",
      content:
        "A single page based on different user's preferences, favorites and custom cocktails built with React.JS.",
      icon: BulletFooter,
      url: "https://github.com/tomerbourstein/cocktail-menu-app",
    },
    {
      title: "Multiplayer Quiz",
      content:
        "A single page multiplayer online trivia quiz game built with React.JS.",
      icon: BulletFooter,
      url: "https://github.com/tomerbourstein/quiz-game",
    },
  ];

  const socials = [
    {
      title: "LinkedIn",
      content: "Let's connect on LinkedIn",
      icon: LiknedinFooter,
      url: "https://www.linkedin.com/in/tomer-bourstein/",
    },
    {
      title: "GitHub",
      content: "Follow for open-source projects",
      icon: GithubFooter,
      url: "https://github.com/tomerbourstein",
    },
    {
      title: "WhatsApp",
      content: "Available for quick chat",
      icon: WhatsappFooter,
      url: "https://wa.me/00972544498337",
    },
    {
      title: "Email",
      content: "Can contact me via tomer.bourstein@gmail.com",
      icon: EmailFooter,
      url: "tomer.bourstein@gmail.com",
    },
  ];

  const projectsAndContactLarge = (
    <div
      className={`${classes.projectsAndContact} ${classes.projectsAndContactLarge}`}
    >
      <div className={classes.projects}>
        <div className={classes.heading}>
          <img src={ProjectsCategory} alt="Projects Icon" />
          <h4>projects</h4>
        </div>

        {projects.map((item, index) => (
          <div key={index} className={classes.footerItem}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.itemHeading}
            >
              <img src={item.icon} alt={item.icon} />
              <span className={classes.footerItemHeading}>{item.title}</span>
            </a>
            <div className={classes.footerItemText}>{item.content}</div>
          </div>
        ))}
      </div>

      <div className={classes.socials}>
        <div className={classes.heading}>
          <img src={SocialsCategory} alt="Socials Icon" />
          <h4>socials</h4>
        </div>

        {socials.map((item, index) => (
          <div key={index} className={classes.footerItem}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.itemHeading}
            >
              <img src={item.icon} alt={item.icon} />
              <span className={classes.footerItemHeading}>{item.title}</span>
            </a>
            <div className={classes.footerItemText}>{item.content} </div>
          </div>
        ))}
      </div>
    </div>
  );

  const projectsAndContactSmall = (
    <div
      className={`${classes.projectsAndContact} ${classes.projectsAndContactSmall}`}
    >
      <div className={`${classes.projects} ${collapseProjects}`}>
        <div
          className={`${classes.heading} ${clickedProjects}`}
          onClick={() => setOpenProjects((prevState) => !prevState)}
        >
          <img src={ProjectsCategory} alt="Projects Icon" />
          <h4>projects</h4>
          <span></span>
        </div>

        {projects.map((item, index) => (
          <div key={index} className={classes.footerItem}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.itemHeading}
            >
              <img src={item.icon} alt={item.icon} />
              <span className={classes.footerItemHeading}>{item.title}</span>
            </a>
            <div className={classes.footerItemText}>{item.content}</div>
          </div>
        ))}
      </div>

      <div className={`${classes.socials} ${collapseSocials}`}>
        <div
          className={`${classes.heading} ${clickedSocials}`}
          onClick={() => setOpenSocials((prevState) => !prevState)}
        >
          <img src={SocialsCategory} alt="Socials Icon" />
          <h4>socials</h4>
          <span></span>
        </div>

        {socials.map((item, index) => (
          <div key={index} className={classes.footerItem}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className={classes.itemHeading}
            >
              <img src={item.icon} alt={item.icon} />
              <span className={classes.footerItemHeading}>{item.title}</span>
            </a>
            <div className={classes.footerItemText}>{item.content} </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <footer id="footer" className={classes.footer}>
      <div className="sectionEdge">
        <div className={classes.roundedRectangle}>
          <h2>Get in touch</h2>
          <div className={classes.icons}>
            {getInTouch.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                onClick={item.onClick}
              >
                <img src={item.icon} alt={item.title} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {messageIsOpen && (
        <FloatingCard
          onClose={toggleContactMessageHandler}
          playCloseAnimation={playCloseAnimation}
        />
      )}

      <div className={classes.container}>
        <div className={classes.about}>
          <div className={classes.heading}>
            <img
              src={Avatar}
              alt="Tomer Bourstein Avatar"
              className={classes.avatar}
            />
            <h4>about</h4>
          </div>
          <span>
            A self-taught JavaScript enthusiast with quick learning abilities,
            diligent, ambitious and highly motivated. I enjoy creating web
            applications with React and know my way around with essential
            JavaScript libraries
          </span>
        </div>

        {projectsAndContactLarge}
        {projectsAndContactSmall}
      </div>

      <div className={classes.copyrights}>Copyright © Tomer Bourstein</div>
    </footer>
  );
};

export default Footer;
