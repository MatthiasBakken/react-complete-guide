import React from 'react';

import { AuthContext } from '../../../Containers/App';
import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <AuthContext.Consumer>  
        {auth => auth ? <p>I'm authenticated</p> : null}
      </AuthContext.Consumer>
      <p onClick={props.click} >I'm {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default Person;