import React from 'react'
import quotes from "../json/quotes.json"
import { useState } from 'react'
import RandomButton from './RandomButton';

const QuoteBox = ({randomQ , randomB , randomColor}) => {


  return (

    <div className='quoteBox'>
        <div className='quote'>{quotes[Number(`${randomQ}`)].quote}</div>
        <div className='author'>⁓{quotes[Number(`${randomQ}`)].author}</div>
        <RandomButton randomize={randomB} randomColour={randomColor}/>
    </div>
  )
}

export default QuoteBox
