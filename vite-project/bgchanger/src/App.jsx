import { useState } from 'react'


function App() {
  const [count, setCount] = useState("Black")

  return (
    <>
      
      <h1>Background Changer App</h1>
      <div className="card ">
        <button  onClick={() => setCount(("White") )}>
          White
        </button>
        <button onClick={() => setCount("Red")}>
          Red
        </button>
        <button onClick={() => setCount("Blue" )}>
          Blue
        </button>
        <button onClick={() => setCount("Green")}> 
          Green
        </button>
        <button onClick={() => setCount("Yellow")}>
          Yellow 
        </button>
        <button onClick={() => setCount("Pink")}> 
          Pink 
        </button>
        <button onClick={() => setCount("Purple")}>
          Purpule 
        </button>
        <button onClick={() => setCount("Orange")}> 

          Orange         </button>
        <button onClick={() => setCount("Gray")}> 
          Gray 
        </button>
        <button onClick={() => setCount("Sky" )}>
          Sky 
        </button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
