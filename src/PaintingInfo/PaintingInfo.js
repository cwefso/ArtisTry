import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PaintingInfo.css'
import backBtn from '../assets/back-btn.png'
import tagBtn from '../assets/tagIcon.png'
import usePaintingInfo from '../Hooks/usePaintingInfo';
import useArtistInfo from '../Hooks/useArtistInfo';
import usePaintings from '../Hooks/usePaintings'

function PaintingInfo(props) {
  const {title, image, completitionYear, artistName, contentId, artistId, artistUrl, height, width} = props.paintingInfo
  
  const data = usePaintingInfo(title, artistName)
  const [paintingDetails, setPaintingDetails] = useState({})
  const { style, description, technique, period, galleryName } = paintingDetails;
  // console.log(data.artistUrl)
  // const artistPaintings = usePaintings(`http://www.wikiart.org/en/App/Painting/PaintingsByArtist?artistUrl=${data.artistURL}&json=2`)
  
  
  const getPaintingDetails = () => {
    fetch('https://fe-cors-proxy.herokuapp.com', {
      headers: {
        "Target-URL": `http://www.wikiart.org/en/App/Painting/ImageJson/${contentId}`
      }
    })
      .then(res => res.json())
      .then(res => setPaintingDetails(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getPaintingDetails()
  }, [])

  return(
    <section className="painting-page">
      <section className="painting-nav">
        <Link to={"/"} style={{ textDecoration: 'none' }}>
          <img 
            src={backBtn} 
            alt='back-btn'   
            className='back-btn' 
          />
        </Link>
        <h1 className="painting-title">{title}</h1>
        <img 
          src={tagBtn} 
          alt='save-btn'
          tabIndex={0}   
          className='save-btn' 
        />
      </section>
      <section className="painting-data-container">
        <section className="painting-box">
          <img 
            className="artwork"
            src={image} 
            alt={title}   
          />
          <p className="completion-year">Year Completed: {completitionYear}</p>
        </section>
        <section className="details-container">
          <Link
            to={`/artists-gallery`}
            aria-label='artist-gallery'
            key={data.artistId}
            style={{textDecoration: 'none'}}
          >
            <p className='artist-btn'>{artistName}</p>
          </Link>
          {style ? (<section className="artwork-details">
            {style && <><p className="detail-title">Movement</p><p>{style}</p></>}
            {description && <><p className="detail-title">Description</p><p className="summary">{description}</p></>}
            {technique && <><p className="detail-title">Technique</p><p>{technique}</p></>}
            {period && <><p className="detail-title">Period</p><p>{period}</p></>}
            {galleryName && <><p className="detail-title-location">Location</p><p className="detail-location">{galleryName}</p></>}
          </section>) : <p className='loading-message'>Loading Painting Details...</p>}
        </section>
      </section>
    </section>
  )
}

export default PaintingInfo;
