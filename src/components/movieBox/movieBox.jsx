import React, { useEffect, useState } from 'react'
import "../movieBox/movieBox.css"
import tv from "../../images/tv.png"
import Home from "../../images/Home.png"
import Movies from "../../images/Movie Projector.png"
import TV_series from "../../images/TV Show.png"
import calendar from "../../images/Calendar.png"
import logout from "../../images/Logout.png"
// import MovieDetails from '../MovieDetails/MovieDetails'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const movieBox = () => {
  const [movie,setMovie]=useState("")
  const {movieid}=useParams()

  const releaseDate=movie.length!=0? new Date(movie.release_date).getFullYear(): null

  
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/' +movieid +'?api_key=5b0952df341b73c81ff0782a6e01f134')
    .then((response)=>{
          setMovie(response.data) 
      // setAllMovieData(response.data)
      console.log(response.data)
    }) 
  .catch((error)=>console.error(error))
  },[])

 
  console.log(movieid)
  return (
    <div className="movieBox-page">
        <div className="side">
          <div className="sidegap">
          <div className='flex '>
                <img src={tv} alt="MovieBox"/>
                <p className='movieBox-text'>MovieBox</p>
            </div>
            <div>
                <div className='flex item'>
                   <img src={Home}/>
                   <p>Home</p>
                </div>
                <div className='flex item'>
                    <img src={Movies}/>
                    <p>Movies</p>
                </div>
                <div className='flex item'>
                    <img src={TV_series}/>
                    <p>TV Series</p>
                </div>
                <div className='flex item'>
                    <img src={calendar}/>
                    <p>Upcoming</p>
                </div>
                
            </div>
          </div>


          <div className="borderTxt">
            <p className="playTxt">Play movie quizes and earn free tickets</p>
            <p className="playTxt2">50k people are playing now</p>
            <button><span className="btn-span">Start playing</span></button>
          </div>
          <div className="flex item">
            <img src={logout} alt="logout"/>
            <p>Logout</p>
          </div>
        </div>
        <div className='rightSide'>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}  data-testid="movie-poster" className="moviePoster"/>
        <div>
          <p data-testid="movie-title">{movie.title}.<span data-testid="movie-release-date">{releaseDate}</span></p>
        </div>
        <div className='pTag' data-testid="movie-overview">
         <p>{movie.overview}</p>
         <div className="btn">
           <button className="btn1">See Showtimes</button>
           <button className="btn2">More Watch Options</button>
         </div>
        </div>
        {/* <p>Directors:{movie</p> */}
        </div>
    </div>
  )
}

export default movieBox