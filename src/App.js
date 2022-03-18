import React, { useEffect, useState } from "react"
import './App.css'

import Movie from "./components/movie"

const featured_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=77f6abe2c181451619437dc60269b3d1&page=1";


const search_API = "https://api.themoviedb.org/3/search/movie?&api_key=77f6abe2c181451619437dc60269b3d1&query="

function App() {
  const [movies, setMovies] = useState([]);
  const [pesquiseTerm, setPesquiseTerm] = useState("");

  useEffect(() => {
    getMovies(featured_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });

  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (pesquiseTerm) {
      getMovies(search_API + pesquiseTerm)


      setPesquiseTerm("");
    }

  }

  const handleOnChange = (e) => {
    setPesquiseTerm(e.target.value);


  }

  return (<>
    {
      movies.length === 0 ? "Carregando" : (<header>
        <div className="logo">

          <a href="/"><h2>Cauan<span>Flix</span></h2></a>

        </div>

        <form onSubmit={handleOnSubmit}>

          <input
            className="Pesquise"
            type="text"
            placeholder="Pesquise"
            value={pesquiseTerm}
            onChange={handleOnChange}
          />

        </form>
      </header>)
    }

    <div className="movie-container">
      {movies.length > 0 && movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}

    </div>
  </>
  );
}

export default App;