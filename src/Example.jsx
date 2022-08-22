import React, { useEffect, useState } from 'react'

function Example() {
    const [count,  setCount] = useState(0);

    useEffect(() => {
        alert("le composant est bien monté et mis à jour") // did mount et didupdate
        return () => {
            //demontage
        }
        
    }, [count])

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
}

export default Example