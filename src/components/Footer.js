import React, { Component } from 'react';
import './Footer.scss';

import { SocialIcon } from 'react-social-icons';

const year = "2018";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear().toString();

    return (
      <footer>
          <div className="social">
            <SocialIcon 
              url={"https://github.com/Smarticles101"}
            />
            <SocialIcon 
              url={"https://www.linkedin.com/in/loganstucki/"}
            />
            <SocialIcon 
              url={"https://twitter.com/Smarticles101"}
            />
            <SocialIcon 
              url={"mailto:loganstucki@gmail.com"}
            />
          </div>

          <div className="copy">
            {/**
              * Hehehehehe copyrighted forevermore
            */}
            &copy; Logan Stucki {year + (currentYear !== year ? " - " + currentYear : "")}
          </div>

          <div className="other">
            :)
          </div>
      </footer>
    );
  }
}

export default Footer;
