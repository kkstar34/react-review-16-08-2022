import logo from './logo.svg';
import './App.css';

import FileUpload from './FileUpload';
import { useState } from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';


function App() {

  const [movies, setMovies] = useState([
    {
      name : "Casa de papel",
      rating : 5,
      posterUrl : "casa.jpg",
    },

    {
      name : "Gomycode",
      rating : 5,
      posterUrl : "gomycode.png",
    },

    {
      name : "Transformeur",
      rating : 5,
      posterUrl : "transformers.jpg",
    }
  
  ])


  const addMovie = (movie) =>
  {


    let newState = [...movies];
    newState.push(movie);
    setMovies(newState);
  }

  
  return (
    <div className="App">
      {/* <FileUpload/> */}
      <AddMovie addNewMovie={addMovie}/>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
