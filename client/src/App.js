import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import App1 from './pages/app1';
import Register from './pages/register';
import AppHome from './pages/appHome';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/app1" component={App1} />
          <Route path="/register" component={Register} />
          <Route path="/appHome" component={AppHome} />
        </div>
      </Router>
    );
  }
}

export default App;
