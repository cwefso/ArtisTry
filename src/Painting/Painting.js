import React, {useState, useEffect} from 'react'
import './Painting.css';
// import PropTypes from 'prop-types';

function Painting (props) {
  const [broken, setBroken] = useState(false)

  const hideBrokenImages = () => {
    setBroken(true)
  }

  const restrictedUrl = props.painting.image.includes("FRAME")

  useEffect(() => {
    if(restrictedUrl === true){
      setBroken(true)
    }
  }, []) 



  return(
    <section className="painting" id={props.painting.contentId}>
    {broken === true && 
      <section className="broken">
        broken
      </section>}
    {broken === false && 
      <img 
      src={props.painting.image} 
      alt={props.painting.title}
      name={props.painting.title} 
      className={'art'} 
      onError={hideBrokenImages} />
    }
    </section>
  )
}

export default Painting;