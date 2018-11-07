import React, { Component } from 'react';
import './Header.scss';

import { Link } from "react-router-dom";
import screens from '../ScreenData.js';

class Header extends Component {
  render() {
    return (
      <header>
        <Link className="current" to="#">
          {this.props.title}
        </Link>

        <div className="right">
          {Object.keys(screens).map(key => 
              <Link
                className={screens[key].title === this.props.title && "current"}
                key={screens[key].title}
                to={screens[key].path}
              >
                {screens[key].title}
              </Link>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
