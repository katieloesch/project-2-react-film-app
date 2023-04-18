import React from 'react'
import notAvailable from './assets/posterNotAvailable2.jpg'
import './Card.css'
import { Link } from 'react-router-dom'

export default function FilmCard({ item, addNewToWatch, removeFromWatchList, markAsWatched, onToWatchList, onWatchedList, unMarkAsWatched, editItem, toWatchList, watchedList }) {
  
  function handleAddToWatchList() {
      addNewToWatch(item)
  }

  function handleRemoveFromToWatch() {
    removeFromWatchList(item)
  }

  function handleMarkAsWatched() {
    markAsWatched(item)
  }

  function handleUnmarkAsWatched() {
    unMarkAsWatched(item)
  }

  function handleCheckBoxChange(e) {
    item.selected = e.target.checked
    if (window.location.href.slice(-9) === 'watchlist') {
      editItem(toWatchList, item)
    } else if (window.location.href.slice(-7) === 'watched') {
      editItem(watchedList, item)
    }
  }



  const imgWidth = '200'
  return (
    <li className='film-card'>
    <input type='checkbox' className='checkbox' onChange={handleCheckBoxChange}></input>
      <div className='card-poster'>
        {item.poster_path ? (

          <Link to={`/film/details/${item.id}`}>
            <img
            className='card-poster-img'
            src={`https://image.tmdb.org/t/p/w${imgWidth}${item.poster_path}`}
            alt={`${item.title} poster`}
          />
          
          </Link>
         
        ) : <Link to={`/film/details/${item.id}`}><img className='poster-not-available' src={notAvailable} alt={`${item.title} poster not available`} style={{width: `${imgWidth}px`}}/></Link>}
      </div>
      <div className='card-info'>
        <span>{item.title}
          {item.release_date ? ` (${item.release_date.slice(0, 4)})` : null}
        </span>       
      </div>
      <div className= 'card-btns'>
          
        {onWatchedList(item) ? <button className='btn unmark-as-watched-btn' onClick={handleUnmarkAsWatched}>
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="white" d="M22.54 16.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 8c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5c0 .5-.1 1-.23 1.43c.69-.27 1.44-.43 2.23-.43c1.12 0 2.17.32 3.07.85c.36-.58.67-1.2.93-1.85c-1.73-4.39-6-7.5-11-7.5S2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5c.35 0 .69 0 1.03-.05c-.03-.15-.03-.3-.03-.45c0-.79.16-1.54.43-2.23c-.43.13-.93.23-1.43.23Z"/></svg></button>
          : <button className='btn mark-as-watched-btn' onClick={handleMarkAsWatched}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5l1.5 1.5M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 8c.5 0 .97-.07 1.42-.21c-.27.71-.42 1.43-.42 2.21v.45l-1 .05c-5 0-9.27-3.11-11-7.5c1.73-4.39 6-7.5 11-7.5s9.27 3.11 11 7.5c-.25.64-.56 1.26-.92 1.85c-.9-.54-1.96-.85-3.08-.85c-.78 0-1.5.15-2.21.42c.14-.45.21-.92.21-1.42a5 5 0 0 0-5-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5Z"/></svg></button>}   

        {onToWatchList(item) ? <button className='btn remove-from-to-watch-btn' onClick={handleRemoveFromToWatch}>
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024"><path fill="#800020" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
        </button>
          : <button className='btn add-to-watch-btn' onClick={handleAddToWatchList}>
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 12 12"><path fill="black" d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5V1.75Z"/></svg>
          </button>}
    
      </div>
      
    </li>
  )
}
