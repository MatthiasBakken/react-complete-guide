import React from 'react';

const Cockpit = (props) => {
  return (
    <div>
      <h1
        className={props.persons.length === 1 ? `one-person` : props.persons.length < 1 ? `no-people` : null}
      >
        {props.persons.length !== 1 ? `There are ${props.persons.length} people in the list` : `There is 1 person in the list`}
      </h1>
      <button
        onClick={props.handler}
      >
        {props.buttonName}
      </button>
      <button onClick={props.login} >Login</button>
    </div>
  )
}

export default Cockpit;