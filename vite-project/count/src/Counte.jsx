import { useState   } from "react"

function Counte(){

    const [count, setcount]=useState (10)

// this variable did not change the value in Ui that why we needs hooks 
    // let count = 10

    // const addValue = () => {
    //     count += 1
    //     console.log(count)
    // }

    // const Removevalue = () => {
    //     count -= 1
    //     console.log(count)
    // }
    return(
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



        <button  onClick={() => setcount(count+1)}>   Add value {count}</button>
        <br />
        <button onClick={() => setcount(count-1)}>Remove Value {count}</button>
        </>
    )
}
export default Counte