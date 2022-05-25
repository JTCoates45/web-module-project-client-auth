import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Logout = () => {
    
    useEffect(() =>{
        const {push} = useHistory
        const token = localStorage.getItem("token")
        axios.post('hyyp://localhost:9000/api/logout', {}, {
            headers: {
                authorization: token
            }
     })
     .then( resp => {
        localStorage.removeItem("token")
        push('/login')
     })
     .catch (err => {
         console.log(err)
     })
    }, []);
    return (<div>

    </div>)
}

export default Logout;