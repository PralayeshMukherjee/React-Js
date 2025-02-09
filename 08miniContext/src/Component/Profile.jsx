import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user){
        return(
            <div>
                <h1>Please Login</h1>
            </div>
        )
    }else{
        return(
            <div>
                <h1>Welcome {user.username}</h1>
            </div>
        )
    }
}

export default Profile
