import { useState, useEffect } from 'react'

const usePaintingSummary = (contentId) => {
  const [paintingDetails, setPaintingDetails] = useState({})
  useEffect(() => {
    const getPaintingDetails = () => {
      fetch('https://fe-cors-proxy.herokuapp.com', {
        headers: {
          'Target-URL': `http://www.wikiart.org/en/App/Painting/ImageJson/${contentId}`
        }
      })
        .then((res) => res.json())
        .then((res) => setPaintingDetails(res))
        .catch((err) => console.log(err))
    }
    getPaintingDetails()
  }, [contentId])
  return paintingDetails
}

export default usePaintingSummary
