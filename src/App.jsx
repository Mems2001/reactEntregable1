import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'

function App() {

  const random = Math.floor(Math.random() * 102) ;

  const randomC = Math.floor(Math.random() * 6) ;

const [allRandom, setallRandom] = useState(random)

const [color, setcolor] = useState(randomC)

const goRandom = () => {
  const random = Math.floor(Math.random() * 102) ;
  const randomC = Math.floor(Math.random() * 6) ;
  setallRandom (random) ;
  setcolor (randomC)
}

// console.log (allRandom)

  return (
    <div className={`App bc${color}`}>

      <QuoteBox randomQ={allRandom} randomB={goRandom} randomColor={color}/>
    
    </div>
  )
}

export default App
