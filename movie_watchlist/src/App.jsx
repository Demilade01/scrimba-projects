import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import { cardData } from './constants'


function App() {
  return (
    <div>
      <Header />
      {cardData.map((card) => (
        <Card
          key={card.id}
          img={card.image}
          title={card.title}
          min={card.min}
          genre={card.genre}
          stars={card.stars}
          summary={card.summary}
        />
      ))}
    </div>
  )
}

export default App
