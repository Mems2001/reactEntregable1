import React from 'react'

const RandomButton = ({randomize , randomColour}) => {
  return (
    <button className={`btn bc${randomColour}`} onClick={randomize}><img className='img' src="https://cdn-icons-png.flaticon.com/512/724/724979.png" /></button>
  )
}

export default RandomButton