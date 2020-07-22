import React from 'react'

function PaintingInfo(props) {
    const {title, image, completitionYear, artistName, artistId, artistUrl, height, width} = props.paintingInfo
    return(
        <section className='paintingPage'>
            <h1>Painting Title: {title}</h1>
            <h1>Artist Name: {artistName}</h1>
            <h1>Completion Year: {completitionYear}</h1>
            <img src={image} alt={title} />
        </section>
    )
}

export default PaintingInfo