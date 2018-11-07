import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import screens from './ScreenData.js';

import './App.scss';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Todo from './screens/Todo';
import Contact from './screens/Contact';

import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
            <Route exact path={screens.Home.path} component={Home} />
            <Route path={screens.Projects.path} component={Projects} />
            <Route path={screens.Contact.path} component={Contact} />
            <Route path={screens.Todo.path} component={Todo} />
            <Footer />
          </div>
        </Router>

    );
  }
}

export default App;
