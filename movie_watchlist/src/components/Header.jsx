import React from 'react'
import Searchbar from './Searchbar'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-text'>
        <h1>Find your movie</h1>
        <p>My Watchlist</p>
      </div>
      <Searchbar />
    </div>
  )
}

export default Header
