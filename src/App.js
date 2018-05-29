import React, { Component , Fragment } from 'react';
import { Header, Footer} from './components/layouts'
import Content from './components/content'

class App extends Component {
  render() {
    return (
      <Fragment>
          <Header/>
            <Content/>
          <Footer/>
      </Fragment>

    );
  }
}

export default App;
