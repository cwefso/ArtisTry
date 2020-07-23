import React from 'react'
import { Link } from 'react-router-dom'
import './PaintingInfo.css'
import backBtn from '../assets/back-btn.png'
import tagBtn from '../assets/tagIcon.png'

function PaintingInfo(props) {
  const {title, image, completitionYear, artistName, artistId, artistUrl, height, width} = props.paintingInfo
  return(
    <section className="painting-page">
      <section className="painting-nav">
        <Link to={"/"} style={{ textDecoration: 'none' }}>
          <img src={backBtn} alt='back-btn' className='back-btn' />
        </Link>
        <h1 className="painting-title">{title}</h1>
        <img src={tagBtn} alt='save-btn' className='save-btn' />
      </section>
      <section className="painting-data-container">
        <section className="painting-box">
          <img 
            className="artwork"
            src={image} 
            alt={title}    
          />
          <p>Year Completed: {completitionYear}</p>
        </section>
        <section className="details-container">
          <Link to="/:artist-name" style={{ textDecoration: 'none', color: 'inherit' }}>
            <p>Artist: {artistName}</p> 
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
