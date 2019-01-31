import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import auth from "./pages/auth";
import home from "./pages/home";
import about from "./pages/about";
import game from "./pages/game";
import bandersnatch from "./pages/bandersnatch";
import choosePath from "./pages/choosePath";


class App extends Component {
  render() {
    return (
      // <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/home" component={home} />
              <Route exact path="/about" component={about} />
              <Route exact path="/game" component={game} />
              <Route exact path="/bandersnatch" component={bandersnatch} />
              <Route exact path="/choosePath" component={choosePath} />

              {/* <Route component={NoMatch} /> */}
            </Switch>
          </div>
        </Router>
      // </div>
    );
  }
}

export default App;
