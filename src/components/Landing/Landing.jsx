import React, { useState,useEffect } from 'react'
import tv from "../../images/tv.png"
import Menu from '../../images/Menu.png'
import play from "../../images/Play.png"
import facebook from "../../images/fa-facebook.png"
import twitter from "../../images/fa-twitter.png"
import instagram from "../../images/fa-instagram.png"
import youtube from "../../images/fa-youtube.png"
import "../Landing/Landing.css"
import img1 from "../../images/Poster Image.png"
import img2 from "../../images/Poster (1).png"
import img3 from "../../images/Poster (2).png"
import img4 from "../../images/Poster (3).png"
import img5 from "../../images/Poster (4).png"
import img6 from "../../images/Poster (5).png"
import img7 from "../../images/Poster (6).png"
import img8 from "../../images/Poster (2).png"
import backArrow from "../../images/Chevron right.png"
// import "../movieCard/movieCard"
import MovieCard from '../movieCard/movieCard' 
// import { getAllMovies } from '../../apiServices/movieList'
import axios from 'axios';

// GET all invoices


const Landing = () => {
    const[allMovieData,setAllMovieData]=useState([])
    
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5b0952df341b73c81ff0782a6e01f134')
        .then((response)=>
            
        // console.log(response.data)
            setAllMovieData(response.data.results)
        )
          
        .catch((error)=>{console.error(error)})
    }
    
    ,[])
    
    return (
        <div className="landingPage">
            <div className="firstPart">
                <nav className="navbar">
                    <div className="nav-div">
                        <img src={tv} alt="tv icon" />
                        <p className="movieIcon-txt">MovieBox</p>
                   </div>
                    <div className="nav-div">
                        <input type="text" placeholder="What do you want to watch?" />
                    </div>
                    <div className="nav-div">
                        <p className="movieIcon-txt signIn">Sign in</p>
                        <img src={Menu} alt="menu bar" />
                    </div>
                </nav>
                <div className='displayMovie'>
                    <h2>John Wick 3 : Parabellum</h2>
                    <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                    <button>
                        <img src={play} alt="play button"/>
                        <h5>WATCH TRAIILER</h5>
                    </button>
                </div>
            </div>
            <div className="secondPart">
                <div className="secondTxt">
                    <p className="feat">Featured Movie</p>
                    <div className="backArrow">
                        <p>See More</p>
                        <img src={backArrow} alt="back Arrow"/>
                    </div>
                   
                </div>
                <div className='grid'>
                {allMovieData.map(function (eachMovie, index) {
					if (index >9 && index<=20) {
						return (
							<section key={index}>
								<MovieCard key={eachMovie.id} eachMovie={eachMovie} />
							</section>
						);
					}
				})}
                </div>

            </div>
            <footer>
                <div className="socialMedia">
                   <img src={facebook} alt="facebook icon"/>
                   <img src={instagram} alt="instagram icon"/>
                   <img src={twitter} alt="twitter icon"/>
                   <img src={youtube} alt="youtube icon"/>
                </div>
                <div className="footerTxt">
                     <p>Conditions of Use</p>
                     <p>Privacy & Policy</p>
                     <p>Press Room</p>
                </div>
                <div className="copyright">
                  <p >© 2021 MovieBox by Adriana Eka Prayudha</p>
                </div>
            </footer>
        </div>
    )
    
}

export default Landing