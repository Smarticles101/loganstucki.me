import React, { Component } from 'react';
import logo from '../Logan.jpg';

import Header from '../components/Header.js';
import Section from '../components/Section.js';
import ScreenData from '../ScreenData';

const title = ScreenData.Home.title;

export default class Home extends Component {

  static title = title;

  render() {
    return (
      <>
        <Header title={title} />
        <div className="screen">
          <Section>
            <h1>Logan Stucki</h1>
					  <hr />

            <img src={logo} className="App-logo" alt="logo" />
          </Section>

          <Section>
            <h2>About</h2>

					  <hr />

            <p>
              Hey guys, welcome to my website.
              I like to write code and program.
              In fact, it might interest you to know
              that this website is programmed completely
              in ReactJS using react-router for routing.
              It's not perfect by any means, but I really
              enjoy making this stuff. To see more stuff I've
              done, check out the Projects page.
            </p>

            <p>
              If you'd like to get into contact with me,
              you can visit the contact page.
            </p>
          </Section>
        </div>
      </>
    );
  }
}
