import React from 'react';
import {Link} from 'react-router-dom';
import './Gallery.css';
import Painting from '../Painting/Painting';
import PropTypes from 'prop-types';

function Gallery (props) {
  console.log(props);
  const setSelectedPainting = (painting) => {
    props.setSelected(painting)
  }

  const displayedPaintings = props.paintings.map(painting => {

    return (
      <Link
        to={`/${painting.url}`}
        aria-label='painting'
        key={painting.id}
        style={{textDecoration: 'none'}}
        onClick={() => setSelectedPainting(painting)}
      >
        <Painting painting={painting} key={painting.id} />
      </Link>
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

