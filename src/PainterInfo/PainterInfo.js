import React from 'react'
import { Link } from 'react-router-dom'
import usePaintings from '../Hooks/usePaintings';
import Gallery from '../Gallery/Gallery';
import '../PaintingInfo/PaintingInfo.css'
// import backBtn from '../assets/back-btn.png'
// import tagBtn from '../assets/tagIcon.png'

function PainterInfo(props) {
  let url;
  const { artistName } = props.info;

  if(artistName !== undefined){
    if(artistName.includes('.')) {
      url = artistName.replace(/\s/g, '').replace(/\./g, '-').toLowerCase()
    } else {
      url = artistName.replace(/\s+/g, '-').replace(/\./g, '-').toLowerCase()
    }
  }

  const artistPaintings = usePaintings(`http://www.wikiart.org/en/App/Painting/PaintingsByArtist?artistUrl=${url}&json=2`);

  return (
    <section className="painter-page">
      <section className="painter-nav">
        <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 className="painting-page-title">ArtisTry</h1>
        </Link>
        <h1 className="artist-page-name">{artistName}</h1>
      </section>
      <section aria-label="gallery">
        <Gallery paintings={artistPaintings} setSelected={props.setSelected}/>
      </section>
    </section>
  )
}

export default PainterInfo;
