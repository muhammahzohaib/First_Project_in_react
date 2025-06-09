import React from 'react'
import { useParams } from 'react-router'
function User() {
  const { id } = useParams();
  return (
    <div>
      <h1 className='bg-gray-600  text-2xl text-center'>User :{id}</h1>
    </div>
  )
}

export default User
