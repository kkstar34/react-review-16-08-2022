import React from 'react'
import { useState } from 'react'
import "./AddMovie.css"

function AddMovie({addNewMovie}) {

    const [name, setName] = useState("");



    const addMovie = () => {
        const movie = {
            name : name,
            posterUrl : "default-movie.jpg",
            rating : 5 
        }

        addNewMovie(movie);
    }

    const handleChangeName = (event) => {
        setName(event.target.value);
    }


  return (
    <div className="add-movie">
        <input type="text" onChange={handleChangeName}/>
        <button onClick={addMovie}>Sumbit</button>
    </div>
  )
}

export default AddMovie