import React from 'react';
import './Gallery.css';
import Painting from '../Painting/Painting';

function Gallery (props) {

  const displayedPaintings = props.paintings.map(painting => {
    return <Painting painting={painting} key={painting.id} />
  })

  return(
  <div>
    {props.paintings.length === 0 && <h1>Add Paintings</h1>}
    {props.paintings.length > 0 && <section className="displayed-paintings">{displayedPaintings}</section>}
  </div>
  
  )  

}

export default Gallery;

