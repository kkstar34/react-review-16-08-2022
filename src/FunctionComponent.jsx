import React, { useState } from 'react'

function FunctionComponent() {


    const [name, setName] = useState("Kouyate");

    const handleChangeName = () =>{
        setName("moussa");
    }


  return (
    <div>
    <h1>mon nom est : {name}</h1>
    <button onClick={handleChangeName}>Changer le nom</button>
  </div>
  )
}

export default FunctionComponent