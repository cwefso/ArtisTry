import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './PaintingInfo.css'
import backBtn from '../assets/back-btn.png'
import selectedTagBtn from '../assets/selectedTag.png'
import unselectedTagBtn from '../assets/unselectedTag.png'
import usePaintingInfo from '../Hooks/usePaintingInfo';
import useArtistInfo from '../Hooks/useArtistInfo';
import usePaintings from '../Hooks/usePaintings'

function PaintingInfo(props) {
  const [isFavorite, setIsFavorite] = useState(false)
  const {artistContentId} = props.paintingInfo
  const {userFavs} = props.favorites
  const {title, image, completitionYear, artistName, artistId, artistUrl, height, width} = props.paintingInfo
  const data = usePaintingInfo(title, artistName)
  const tagBtn = isFavorite ? selectedTagBtn : unselectedTagBtn

useEffect(() => {
  if(userFavs) {
    const isPaintingAFav = userFavs.find(favorite => favorite.artistContentId === artistContentId)
    isPaintingAFav && setIsFavorite(true) 
  }
}, []) 

  // console.log(data.artistUrl)
  // const artistPaintings = usePaintings(`http://www.wikiart.org/en/App/Painting/PaintingsByArtist?artistUrl=${data.artistURL}&json=2`)

console.log(tagBtn);
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

        <Link
          to={`/artists-gallery`}
          aria-label='artist-gallery'
          key={data.artistId}
          style={{textDecoration: 'none'}}
        >
          <p>Artist: {artistName}</p>
        </Link>



{/* 
          <Link to={`/${artistName}`} style={{ textDecoration: 'none', color: 'inherit' }}>

          </Link> */}
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
