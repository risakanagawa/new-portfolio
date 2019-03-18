import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

import Header from './Header';
import Works from './Works';
import AboutMe from './AboutMe'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className='body-wrapper'>
        <Header />
        <AboutMe />
        <Works />
        <Footer />
      </div>
    );
  }
}

export default App;
