import React, {useState, useContext} from 'react'
import UserContex from '../Contex/UserContex'


function Login() {
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')

    // how to use Usercontex
    const {setUser} = useContext(UserContex)

    const handlesubmit =(e)=>{
            e.preventDefault()
            setUser({username, password})
    }
  return (
    <div className='text-center text-4xl'>
        <h2>Login</h2>
        <input value={username} onChange={(e)=> setusername(e.target.value)} type="text" placeholder="Username" />

        <input value={password} onChange={(e)=> setPassword(e.target.value)} type="text" placeholder="password" />
        <button className='bg-gray-600  rounded-2xl' onClick={handlesubmit }>Submit</button>
    </div>
  )
}

export default Login
