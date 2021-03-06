import React from 'react';
import '../social_icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
         <Col xl={12} className="social-icons">
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="https://www.facebook.com/shubhamkumawat1998" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="fb" icon={faFacebook} />
          </a>
          <a href="https://github.com/shubh-0422" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="git" icon={faGithub} />
          </a>
          {/* <a href="https://twitter.com/okrittim" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="twitter" icon={faTwitter} />
          </a> */}
          <a href="https://www.instagram.com/shubh_0422/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="insta" icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/shubham-kumawat-59a791130/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
          </a>
         </Col>
  );
}

export default SocialIcons;
