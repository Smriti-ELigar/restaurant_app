import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <section>
        <div className='banner'>
          <h2>Little Lemon</h2>
          <h3>Bangalore</h3>
          <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist</p>
          <Link to="/booking">
            <button aria-label='On Click'>
              Reserve a Tabel
            </button>
          </Link>
          <div className='banner-img'>
            <img src="/restauranfood.jpg" alt="banner" />
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header