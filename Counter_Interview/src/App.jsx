
import { useState } from 'react'
import './App.css'

function App() {


  // Interview question for Count if we can use the Addclick function otherwise we just add onlcik with button
const [count, setcount] = useState(10)
const addClick = () => {
  setcount((prevcount)=> prevcount+1)
  // setcount((prevcount)=> prevcount+1)
  // setcount((prevcount)=> prevcount+1)
  // setcount((prevcount)=> prevcount+1)

}
  return (
    <>
      <h1>Hello, this is Count Place </h1>
        <h1>Count value is: {count}</h1>
        {/* <button  onClick={addValue} >
            Add Value  {count}
        </button >
        <br />
        <button onClick={Removevalue}> 
            Remove  Value {count}
        </button> */}



        <button  onClick={() => setcount(count+3) /*addClick*/}>   Add value {count}</button>
        <br />
        <button onClick={() => setcount(count-1)}>Remove Value {count}</button>
    </>
  )
}

export default App
