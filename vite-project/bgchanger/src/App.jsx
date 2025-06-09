import { useState } from 'react'


function App() {
  const [count, setCount] = useState("Black")
  
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center p-30 gap-10' style={{ backgroundColor: count }}>
      
      <h1> Background Changer App </h1>
      <div   className="card flex  gap-4">
        <button style={{background:"olive", color:"white"}}   onClick={() => setCount(("olive") )}>
          Olive
        </button>
        <button style={{background:"red", color:"white"}} onClick={() => setCount("Red")}>
          Red
        </button>
        <button style={{background:"blue", color:"white"}} onClick={() => setCount("Blue" )}>
          Blue
        </button>
        <button style={{background:"green", color:"white"}}  onClick={() => setCount("Green")}> 
          Green
        </button>
        <button style={{background:"yellow", color:"black"}} onClick={() => setCount("Yellow")}>
          Yellow 
        </button>
        <button style={{background:"pink", color:"black"}} onClick={() => setCount("Pink")}> 
          Pink 
        </button>
        <button style={{background:"purple", color:"white"}} onClick={() => setCount("Purple")}>
          Purpule 
        </button>
        <button style={{background:"Orange", color:"white"}} onClick={() => setCount("Orange")}> 

          Orange         </button>
        <button style={{background:"Gray", color:"white"}} onClick={() => setCount("Gray")}> 
          Gray 
        </button>
                

              
        </div>
      
    </div>
  )
}

export default App
