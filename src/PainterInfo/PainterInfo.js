import React from 'react'
import { Link } from 'react-router-dom'
import usePaintings from '../Hooks/usePaintings';
import Gallery from '../Gallery/Gallery';
import backBtn from '../assets/back-btn.png'
import tagBtn from '../assets/tagIcon.png'

function PainterInfo(props) {

  let url

  const {artistName} = props

  if(artistName !== undefined){
    url = artistName.replace(/\s+/g, '-').toLowerCase()
  }

  const artistPaintings = usePaintings(`http://www.wikiart.org/en/App/Painting/PaintingsByArtist?artistUrl=${url}&json=2`);


  return (
    <section className="painter-page">
       <section className="painter-nav">
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <img src={backBtn} alt='back-btn' className='back-btn' />
          </Link>
          <h1 className="artist-name">{artistName}</h1>
          <img src={tagBtn} alt='save-btn' className='save-btn' />
      </section>
      <section aria-label="gallery">
        <Gallery paintings={artistPaintings} />  
      </section>
    </section>
  )
}

//<Gallery paintings={artistPaintings} />

export default PainterInfo;