import React from 'react';
import './Painting.css';
import PropTypes from 'prop-types';


function Painting (props) {

  return(
    <section>
      <img 
        src={props.painting.image} 
        alt={props.painting.title} className="art" 
      />
    </section>
  )
}

export default Painting;