import React from 'react'

const img_API = "https://image.tmdb.org/t/p/w1280";

const setVotesClass = (vote) => {
  if (vote >= 8) {
    return "green"
  } else if (vote >= 6) {
    return "yellow"
  } else {
    return "red"
  }

}

const Movie = ({ title, poster_path, overview, vote_average, release_date }) => (
  <div className="movie">
    <img src={
      poster_path ? img_API + poster_path :
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwyfHxtb3ZpZXxlbnwwfHx8fDE2NDQxNjM4MTA&ixlib=rb-1.2.1&q=80&w=1080"} alt={title} />
    <div className="movie-info">

      <h3>{title}</h3>
      <span className={`tag ${setVotesClass(vote_average)}`}>{vote_average}</span>

    </div>

    <div className="movie-overview">
      <h2>Overview:</h2>
      <p>{overview}</p>
    </div>

    <div className="release-movie">
      <h2>Data de lançamento:</h2>
      <p>{release_date}</p>

    </div>



  </div>
);

export default Movie;
