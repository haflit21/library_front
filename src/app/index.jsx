import React from 'react';
import {render} from 'react-dom';
import * as components from './components.jsx'


class App extends React.Component {
  render () {
    return (
    	<components.Header />
    );
  }
}

render(<App/>, document.getElementById('app'))