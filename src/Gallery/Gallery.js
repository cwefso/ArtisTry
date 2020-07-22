import React from 'react';
import './Gallery.css';
import Painting from '../Painting/Painting';
import PropTypes from 'prop-types';

function Gallery ({ paintings }) {

  const displayedPaintings = paintings.map(painting => {
    return (
      <Painting painting={painting} key={painting.id} />
    )
  })

  return (
    <section>
      {paintings.length === 0 && <h1>Loading Collection</h1>}
      {paintings.length > 0 && <section className="displayed-paintings">{displayedPaintings}</section>}
    </section>
  )  
}

export default Gallery;

