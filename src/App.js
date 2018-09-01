import React, { Component } from 'react';

import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: Math.random(100) * Math.random(1000), name: "Max", age: 28 },
      { id: Math.random(100) * Math.random(1000), name: "Manu", age: 29 },
      { id: Math.random(100) * Math.random(1000), name: "Stephanie", age: 26 }
    ],
    showPersons: false
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
        {this.state.persons.map((person, index) => {
          return (
            <Person
              key={person.age + person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.newNameInputHandler(event, person.id)}
            />
          )
        })}
        {/* <Person
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
        /> */}
      </div>)
    } else {
      persons = null;
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          onClick={handler}
        >
          {buttonName}
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
