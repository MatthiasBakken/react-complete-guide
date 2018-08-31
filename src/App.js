import React, { Component } from 'react';

import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29" />
        <Person name="Stephanie" age="26" />
      </div>
    );
  }
}

export default App;
