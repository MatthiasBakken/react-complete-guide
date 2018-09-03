import React from 'react';

import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, index) => {
      return (
        // <ErrorBoundary key={person.age + person.id}>
        <Person
          key={person.age + person.id}
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={(event) => props.changed(event, person.id)}
        />
        // </ErrorBoundary>
      )
    });

export default Persons;