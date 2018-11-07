import React, { Component } from 'react';

import Header from '../components/Header.js';
import Section from '../components/Section.js';
import ScreenData from '../ScreenData.js';

const title = ScreenData.Todo.title;

export default class Todo extends Component {

  static title = title;

  render() {
    return (
			<>
				<Header title={title} />
				<div className="screen">
          <Section>
            <h1>
              Todo
            </h1>
            <hr />
            <p>
              Add contact page<br />
              Populate projects page<br />
              Make menu bar with dropdown menu for mobile<br />
              Screens should get title from ScreenData.js<br />
              More color usage?<br />
            </p>
          </Section>
				</div>
			</>
    );
  }
}
