import React from 'react';
import './Painting.css';


function Painting (props) {

  return(
    <div>
      <h1>Painting</h1>
      <img src={props.painting.image} alt={props.painting.title} className="art" />
    </div>
  )
}

export default Painting;