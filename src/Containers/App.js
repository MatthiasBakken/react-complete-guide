import React, { Component } from 'react';

// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import './App.css';

export const AuthContext = React.createContext(false);

class App extends Component {
  state = {
    persons: [
      { id: Math.random(100) * Math.random(1000), name: "Max", age: 28 },
      { id: Math.random(100) * Math.random(1000), name: "Manu", age: 29 },
      { id: Math.random(100) * Math.random(1000), name: "Stephanie", age: 26 }
    ],
    showPersons: false,
    authenticated: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  newNameInputHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  };

  createNamesHandler = (persons) => {
    this.setState({
      persons: persons
    })
  }

  loginHandler = () => {
    this.setState({ authenticated: !this.state.authenticated })
  }

  render() {
    // console.log(this.state.persons.length)
    // console.log(handler)
    let persons = null;
    let handler = this.togglePersonsHandler;
    let buttonName = "Show Names"

    const people = [
      { id: Math.random(100) * Math.random(1000), name: "Max", age: 28 },
      { id: Math.random(100) * Math.random(1000), name: "Manu", age: 29 },
      { id: Math.random(100) * Math.random(1000), name: "Stephanie", age: 26 }
    ]

    this.state.showPersons ? buttonName = "Hide Names" : buttonName = "Show Names";

    !this.state.persons.length ? buttonName = "Create Names" : this.state.showPersons ? buttonName = "Hide Names" : buttonName = "Show Names";

    !this.state.persons.length ? handler = (() => this.createNamesHandler(people)) : handler = this.togglePersonsHandler;

    if (this.state.showPersons) {
      persons = 
      (<div
        className="Person-Container"
      >
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.newNameInputHandler}
        />
      </div>)
    } else {
      persons = null;
    }

    return (
      <div className="App">
        <Cockpit
          handler={handler}
          buttonName={buttonName}
          login={this.loginHandler}
          persons={this.state.persons}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
