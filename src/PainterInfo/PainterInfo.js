  import React from 'react'
import { Link } from 'react-router-dom'
import usePaintings from '../Hooks/usePaintings';
import Gallery from '../Gallery/Gallery';
import '../PaintingInfo/PaintingInfo.css'

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
          <h1 className="painting-page-title" data-testid='ArtisTry'>ArtisTry</h1>
        </Link>
        <h1 className="artist-page-name" data-testid={artistName}>{artistName}</h1>
      </section>
      <section aria-label="gallery">
        <Gallery paintings={artistPaintings} setSelected={props.setSelected}/>
      </section>
    </section>
  )
}

export default PainterInfo;
