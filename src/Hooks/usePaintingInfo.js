import { useState, useEffect } from 'react'

const usePaintingInfo = (title, artistName) => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    const loadPaintingInfo = () => {
      fetch('https://fe-cors-proxy.herokuapp.com', {
        headers: {
          'Target-URL': `https://www.wikiart.org/en/api/2/PaintingSearch?term=[${artistName} ${title}]`
        }
      })
        .then((res) => res.json())
        .then((result) => setInfo(result.data[0]))
        .catch((err) => console.log(err.message))
    }

    loadPaintingInfo()
  }, [artistName, title])

  return info
}

export default usePaintingInfo
