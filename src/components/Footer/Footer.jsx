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

const Footer = () => {
  return (
    <footer id="footer" className={classes.footer}>
      <div className="sectionEdge">
        <div className={classes.roundedRectangle}>
          <h2>Get in touch</h2>
          <div className={classes.icons}>
            <a href="">
              <img src={EmailCloud} />
            </a>
            <a href="">
              <img src={WhatsappCloud} />
            </a>

            <a href="">
              <img src={LinkedinCloud} />
            </a>
          </div>
        </div>
      </div>

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
            Self-taught JavaScript enthusiast with quick learning abilities,
            diligent, ambitious and highly motivated. I enjoy creating web
            applications with React and know my way around with essential
            JavaScript libraries
          </span>
        </div>
        <div className={classes.projectsAndContact}>
          <div className={classes.projects}>
            <div className={classes.heading}>
              <img src={ProjectsCategory} alt="Projects Icon" />
              <h4>projects</h4>
            </div>

            <div className={classes.footerItem}>
              <div className={classes.itemHeading}>
                <span className={classes.footerItemImage}>
                  <img src={BulletFooter} alt="Bullet Icon" />
                </span>
                <span className={classes.footerItemHeading}>The Witcher</span>
              </div>
              <div className={classes.footerItemText}>
                A single page typing contest with “The Witcher” theme built with
                React.JS.
              </div>
            </div>

            <div className={classes.footerItem}>
              <div className={classes.itemHeading}>
                <span className={classes.footerItemImage}>
                  <img src={BulletFooter} alt="Bullet Icon" />
                </span>
                <span className={classes.footerItemHeading}>
                  Multiplayer Quiz
                </span>
              </div>
              <div className={classes.footerItemText}>
                A single page multiplayer online trivia quiz game built with
                React.JS.
              </div>
            </div>

            <div className={classes.footerItem}>
              <div className={classes.itemHeading}>
                <span className={classes.footerItemImage}>
                  <img src={BulletFooter} alt="Bullet Icon" />
                </span>
                <span className={classes.footerItemHeading}>
                  Cocktails Menu
                </span>
              </div>
              <div className={classes.footerItemText}>
                A single page based on different user's preferences, favorites
                and custom cocktails built with React.JS.
              </div>
            </div>
          </div>
          <div className={classes.socials}>
            <div className={classes.heading}>
              <img src={SocialsCategory} alt="Socials Icon" />

              <h4>socials</h4>
            </div>

            <div className={classes.footerItem}>
              <div className={classes.itemHeading}>
                <span className={classes.footerItemImage}>
                  <img src={LiknedinFooter} alt="LinkedIn Icon" />
                </span>
                <span className={classes.footerItemHeading}>LinkedIn</span>
              </div>
              <div className={classes.footerItemText}>
                Let's connect on LinkedIn
              </div>
            </div>

            <div className={classes.footerItem}>
              <div className={classes.itemHeading}>
                <span className={classes.footerItemImage}>
                  <img src={GithubFooter} alt="GitHub Icon" />
                </span>
                <span className={classes.footerItemHeading}>GitHub</span>
              </div>
              <div className={classes.footerItemText}>
                Follow for open-source projects
              </div>
            </div>

            <div className={classes.footerItem}>
              <div className={classes.itemHeading}>
                <span className={classes.footerItemImage}>
                  <img src={WhatsappFooter} alt="WhatsApp Icon" />
                </span>
                <span className={classes.footerItemHeading}>WhatsApp</span>
              </div>
              <div className={classes.footerItemText}>
                Available for quick chat
              </div>
            </div>

            <div className={classes.footerItem}>
              <div className={classes.itemHeading}>
                <span className={classes.footerItemImage}>
                  <img src={EmailFooter} alt="Email Icon" />
                </span>
                <span className={classes.footerItemHeading}>email</span>
              </div>
              <div className={classes.footerItemText}>
                Can contact me via Email
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.copyrights}>Copyright © Tomer Bourstein</div>
    </footer>
  );
};

export default Footer;
