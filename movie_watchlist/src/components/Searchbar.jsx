import React from 'react'

const Searchbar = () => {
  return (
    <div className='searchbar'>
      <input type="text" placeholder="Blade Runner" className='searchbar-input' name="search" />
      <button className='searchbar-button'>Search</button>
    </div>
  )
}

export default Searchbar
