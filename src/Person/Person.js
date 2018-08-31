import React from 'react';

const Person = (props) => {
  return (
    <div>
      I'm {props.name} and I am {props.age} years old
    </div>
  );
}

export default Person;