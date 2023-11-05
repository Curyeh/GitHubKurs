import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { HashLink as LinkHash } from "react-router-hash-link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <div className="skognesfooter">
        <h2 className="skognesmyaccount">MIN KONTO</h2>
        <div className="footercontentAccount">
          <ul>
            <li>
                <Link to="/registrer">Registrer</Link>
            </li>
            <li>
              <Link to="/login">Logg inn</Link>
            </li>
          </ul>
        </div>
        <h2 className="skogneshelp">HJELP</h2>
        <div className="footercontentHelp">
          <ul>
            <li>
              <LinkHash to="/aboutus#sizesLink">Størrelseguide</LinkHash>
            </li>
          </ul>
        </div>
        <h2 className="skognesInfo">INFO</h2>
        <div className="footercontentInfo">
          <ul>
            <li>
              <LinkHash to="/aboutus#aboutUsLink">Om oss</LinkHash>
            </li>
            {/* <li>
              <LinkHash to="/aboutus#forBusinessLink">For bedrift</LinkHash>
            </li> */}
            <li>
              <LinkHash to="/aboutus#shippingLink">Frakt</LinkHash>
            </li>
            <li>
              <LinkHash to="/aboutus#returnLink">Retur</LinkHash>
            </li>
          </ul>
        </div>
        <div className="footercontentFollow">
          <h2 className="skognesfollowskognes">FOLLOW SKOGNES</h2>
          <div className="socialIcons">
            <Link to="https://www.facebook.com" target="_blank">
              <FacebookIcon />
            </Link>
            <Link to="https://www.twitter.com" target="_blank">
              <TwitterIcon />
            </Link>
            <Link to="https://www.instagram.com" target="_blank">
              <InstagramIcon />
            </Link>
            <Link to="https://www.linkedin.com" target="_blank">
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
