import React from 'react'
import { Link } from 'react-router-dom'
import './PaintingInfo.css'
import backBtn from '../assets/back-btn.png'
import tagBtn from '../assets/tagIcon.png'
import usePaintingInfo from '../Hooks/usePaintingInfo';
import useArtistInfo from '../Hooks/useArtistInfo';
import usePaintings from '../Hooks/usePaintings'

function PaintingInfo(props) {
  const {title, image, completitionYear, artistName, artistId, artistUrl, height, width} = props.paintingInfo
  
  const data = usePaintingInfo(title, artistName)

  // console.log(data.artistUrl)
  // const artistPaintings = usePaintings(`http://www.wikiart.org/en/App/Painting/PaintingsByArtist?artistUrl=${data.artistURL}&json=2`)

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
