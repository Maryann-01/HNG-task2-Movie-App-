import { React, useState, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import "../movieCard/movieCard.css";
import heart from "../../images/Heart.png"
import imdb from "../../images/imdb.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
const MovieCard = ({ eachMovie }) => {
  // const []
  const { id } = eachMovie;
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setIsClicked(!isClicked);
    // console.log(event.target.id)
  };
  useEffect(() => {
    isClicked ? navigate(`/movies/${id}`) : null;
  }, [isClicked]);
  return (
    <div className="movie-card">
      <div className="movieCard" data-testid="movie-card">
	  <span className="heartImage">
          <img src={heart}/>
        </span>
        <img
          src={`https://image.tmdb.org/t/p/original${eachMovie.poster_path}`}
          alt={eachMovie.title}
          id={id}
          data-testid="movie-poster"
          onClick={handleClick}
        />

        <Link
          to={`/movies/:${id}`}
          key={eachMovie.id}
          style={{ textDecoration: "none" }}
        >
          <span className="release-date">
            <p data-testid="movie-release-date">{`USA,${eachMovie.release_date.slice(
              0,
              4
            )}`}</p>
          </span>
          <h2 data-testid="movie-title" className="movie-title">
            {eachMovie.title}
          </h2>
        </Link>
        {/* <img src={imdb} alt="imdb" className='imdb'/> */}

      
        {/* <img src={imdb} alt="imdb" className='imdb'/> */}
        <Outlet />
      </div>
    </div>
  );
};

export default MovieCard;
