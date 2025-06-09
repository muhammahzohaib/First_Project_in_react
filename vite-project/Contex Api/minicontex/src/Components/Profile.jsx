import React,{ useContext} from 'react'
import UserContex from '../Contex/UserContex'
function Profile() {

    const {user} = useContext(UserContex)
    if (!user) return <div className="text-center">Please login</div>

    return <div className="text-center text-4xl">Welcome {user.username}</div>    
  
}

export default Profile
