import React from 'react';
import LandingPage from './landingpage.js';
import About from './about_me.js';
import Resume from './resume.js';
import Projects from './projects.js';
import Contact from './contactme.js';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={About} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;
