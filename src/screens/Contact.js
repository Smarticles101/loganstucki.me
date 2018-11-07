import React, { Component } from 'react';

import Header from '../components/Header.js';
import Section from '../components/Section.js';
import ScreenData from '../ScreenData.js';

import './Contact.scss';

const title = ScreenData.Contact.title;
const email = "loganstucki@gmail.com";

export default class Contact extends Component {

  state = {
    subject: '',
    body: '',
  }

  constructor() {
    super();

    this.setSubject = this.setSubject.bind(this);
    this.setBody = this.setBody.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  setSubject(event) {
    this.setState({ subject: event.target.value });
  }

  setBody(event) {
    this.setState({ body: event.target.value });
  }

  submitForm(event) {
    event.preventDefault();
    window.open(
      'mailto:' + encodeURIComponent(email) + 
      '?subject=' + encodeURIComponent(this.state.subject) + 
      '&body=' + encodeURIComponent(this.state.body)
    );
  }

  render() {

    return (
			<>
				<Header title={title} />
				<div className="screen">
					<Section>
            <h1>Contact</h1>
            <hr />

            <form onSubmit={this.submitForm}>
              <label>Subject</label>
              <input className="input" type="text" required value={this.state.subject} onChange={this.setSubject} />
              <label>Body</label>
              <textarea className="input" required value={this.state.body} onChange={this.setBody} />
              <button type="submit">Submit</button>
            </form>

					</Section>
				</div>
			</>
    );
  }
}
