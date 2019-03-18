import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

import HomePage from './HomePage';
import Project from './Project';

class App extends Component {
  render() {
    return (
      <div className='body-wrapper'>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/work" exact component={Project} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
