import React from 'react'



// artistId
// "57726d86edc2cb3880b48f5d"
// artistName
// "Henri de Toulouse-Lautrec"
// artistUrl
// "henri-de-toulouse-lautrec"
// completitionYear
// 1892
// height
// 559
// id
// "57727593edc2cb3880ceb255"
// image
// "https://uploads8.wikiart.org/images/henri-de-toulouse-lautrec/in-bed-the-kiss-1892.jpg!Large.jpg"
// title
// "In Bed, The Kiss"
// url
// "in-bed-the-kiss-1892"
// width
// 750
// new prop
// : 
// ""
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