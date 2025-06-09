// import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router"

function Github() {
const data = useLoaderData();

//   this is the simple method but prefer use loader always
    // const [ data , setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/muhammahzohaib')
    //     .then(response => response.json())
    //     .then(data =>{
    //         setData(data);
    //         console.log(data);
    //     } )
    // }),[]

  return (
    <div className='text-center bg-gray-700 text-white'>
      Github Followers: {data.followers ? data.followers : 'Loading...'}
      <img src={data.avatar_url} alt="Git Hub Picture "  width={300}
      className='ml-130 mt-40 mb-40'/>
    </div>
  )
}

export default Github



export const githubinforloader = async () => {

  const response = await fetch('https://api.github.com/users/muhammahzohaib')
  // .then(response => response.json())
  return response.json()

}