import React from 'react'

const RandomButton = ({randomize , randomColour}) => {

    let color1 = randomColour

    if (randomColour === 7) {
        color1 = 5
    }
            
  return (
    <button className={`btn bc${color1}`} onClick={randomize}><img className='img' src="https://cdn-icons-png.flaticon.com/512/724/724979.png" /></button>
  )
}

export default RandomButton