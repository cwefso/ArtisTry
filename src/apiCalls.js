  // const mostViewedUrl = "https://www.wikiart.org/en/api/2/MostViewedPaintings"
  
  export const getPaintings = () => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://www.wikiart.org/en/api/2/MostViewedPaintings`)
    .then(res => res.json())
  }; 