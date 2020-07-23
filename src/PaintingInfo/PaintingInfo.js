import React from 'react'
import { Link } from 'react-router-dom'
import './PaintingInfo.css'

function PaintingInfo(props) {
  const {title, image, completitionYear, artistName, artistId, artistUrl, height, width} = props.paintingInfo
  return(
    <section className="painting-page">
      <section className="painting-nav">
        <Link to={"/"} style={{ textDecoration: 'none' }}>
          <button>Back To Main</button>
        </Link>
        <h1 className="painting-title">{title}</h1>
        <button>Save To Gallery</button>
      </section>
      <section className="painting-data-container">
        <section className="painting-box">
          <img 
            className="artwork"
            src={image} 
            alt={title}    
          />
          <p>Completion Year: {completitionYear}</p>
        </section>
        <section className="details-container">
          <Link to="/:artist-name">
            <p>Artist Name: {artistName}</p> 
          </Link>
          <p>Movement?</p>
          <p>Summary?</p>
          <p>Other works?</p>
          <p>Similar Artists?</p>
        </section>
      </section>
    </section>
  )
}

export default PaintingInfo;
