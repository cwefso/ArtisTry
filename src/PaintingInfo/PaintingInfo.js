import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './PaintingInfo.css'
import backBtn from '../assets/back-btn.png'
import selectedTagBtn from '../assets/selectedTag.png'
import unselectedTagBtn from '../assets/unselectedTag.png'
import usePaintingInfo from '../Hooks/usePaintingInfo';
import { getFavorites } from '../apiCalls'
import useArtistInfo from '../Hooks/useArtistInfo';
import usePaintings from '../Hooks/usePaintings'
// import tagBtn from '../assets/tagIcon.png'
import usePaintingSummary from '../Hooks/usePaintingSummary'


function PaintingInfo(props) {

  const [isFavorite, setIsFavorite] = useState(false)
  const {title, image, completitionYear, artistName, contentId, artistContentId, artistUrl, height, width} = props.paintingInfo
  const {userFavs} = props.favorites
  const data = usePaintingInfo(title, artistName)
  const [paintingDetails, setPaintingDetails] = useState({})
  // const { style, description, technique, period, galleryName } = paintingDetails;
  let tagBtn = isFavorite? selectedTagBtn : unselectedTagBtn
  const paintingSummary = usePaintingSummary(contentId)
  const { style, description, technique, period, galleryName } = paintingSummary;
  

  const toggleFavs = () => {
    setIsFavorite(!isFavorite)
    isFavorite ? deleteFromFavs(contentId) : addToFavs() 
  }

  const addToFavs = () => {
    const{title, contentId, artistContentId, artistName, completitionYear, yearAsString, width, image, height}=props.paintingInfo
    fetch(
      "http://localhost:3001/api/v1/favorites", {
        "method": "POST",
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify({
          'title': title,
          'contentId': contentId,
          'artistContentId': artistContentId,
          'artistName': artistName,
          'completitionYear': completitionYear,
          'yearAsString': yearAsString,
          'width': width,
          'image': image,
          'height': height,
          'name': 'image'
        })
      }
    )
  }

  const deleteFromFavs = (contentId) => {
    fetch(`http://localhost:3001/api/v1/favorites/${contentId}`, {
      method: 'DELETE'
    })
  }

  useEffect(() => {
    if(userFavs) {
      const isPaintingAFav = userFavs.find(favorite => favorite.artistContentId === artistContentId)
      isPaintingAFav && setIsFavorite(true) 
    }
  }, []) 
  
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
        <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
          <label htmlFor="home button"></label>
          <h1 
            aria-label="home button"
            className="painting-page-title">
            ArtisTry
          </h1>
        </Link>
        <h1 className="painting-title">{title}</h1>
        < img src = {tagBtn} alt='save-btn'
        className = 'save-btn'
        onClick = {toggleFavs}
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
          </section>) : <p className='loading-details-message'>Loading Painting Details...</p>}
        </section>
      </section>
    </section>
  )
}

export default PaintingInfo;
