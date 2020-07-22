  // const mostViewedUrl = "https://www.wikiart.org/en/api/2/MostViewedPaintings"
  // const proxy = 'https: //github.com/turingschool-examples/cors-proxy/'
  export const getPaintings = () => {
    return fetch(`https://cors-anywhere.herokuapp.com/http://www.wikiart.org/en/App/Painting/MostViewedPaintings`)
    .then(res => res.json())
  }; 