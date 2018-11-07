import React, { Component } from 'react';

import Header from '../components/Header.js';
import Section from '../components/Section.js';
import ScreenData from '../ScreenData.js';

const title = ScreenData.Projects.title;

export default class Projects extends Component {

  static title = title;

  render() {
    return (
		
			<>
				<Header title={title} />
				<div className="screen">
					<a href="https://github.com/Smarticles101/loganstucki.me" target="_blank" rel="noopener noreferrer">
						<Section hover>
							<h1>
								This website
							</h1>
							<hr />
							<p>
								I made this website! Built it with ReactJS and a couple of libraries.
								Took me about a week I would say to get everything right for the first time
								I committed it. I'm not a UX expert, but I think it looks okay, plus it's
								mobile-friendly!
							</p>
						</Section>
					</a>
				</div>
			</>
    );
  }
}
