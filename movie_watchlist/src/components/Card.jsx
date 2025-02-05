import React from 'react'
import  star from "../assets/icons/star.png"

const Card = ({ img, title, min, genre, stars, summary }) => {
  return (
    <>
    <section className='card'>
      <div className='card-content'>
        <img src={img} alt={title} className='card-img' />
        <div className='card-info'>
          <h2 className='card-title'>{title}</h2>
          <img src={star} alt="star" width={15} height={15} className='star-icon'/>
          <p className='card-stars'>{stars}</p>
        </div>
        <div className='card-details'>
          <p className='card-min'>{min}</p>
          <p className='card-genre'>{genre}</p>
        </div>
        <p className='card-summary'>{summary}</p>
      </div>
    </section>
    <div className='border-line'></div>
    </>
  )
}

export default Card

          