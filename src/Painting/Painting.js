import React from 'react';
import './Painting.css';
// import PropTypes from 'prop-types';


function Painting (props) {

  const hideBrokenImages = () => {
    const img = document.getElementById(props.painting.contentId)
    img.classList.add('hidden')
  }

  return(
    <section className="painting" id={props.painting.contentId}>
      <img 
        src={props.painting.image} 
        alt={props.painting.title} 
        className={'art'} 
        onError={hideBrokenImages} />
    </section>
  )
}

export default Painting;