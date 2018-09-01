import React, { Component } from 'react';

import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    showPersons: false
  }

  handleChangeNames = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "Manui", age: 30 },
        { name: "Steph", age: 27 }
      ]
    })
  }

  newNameInputHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 29 },
        { name: event.target.value, age: 30 },
        { name: "Steph", age: 27 }
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }



  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          onClick={this.togglePersonsHandler}
        >
          Show Names
        </button>
        { this.state.showPersons ? 
        <div
          className="Person-Container"
        >
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.handleChangeNames.bind(this, "Max!")}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.newNameInputHandler}
          >My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div> : null
        } 
      </div>
    );
  }
}

export default App;
