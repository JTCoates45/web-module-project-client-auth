import React, {useState} from "react"
import axios from 'axios'

const AddFriends = () => {

    const [form, setForm] = useState({
        name: '',
        age:'',
        email:'',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends',form, {
            headers: {
            autorization: token
            }
        })
            .then(resp=> {
                PushManager('/friends')
            })
            .catch(err => {
                console.log(err)
            })

        }
    


    return (
    <div>
        <h1>AddFriends</h1>
    <form onSubmit={handleSubmit}>
        
        <label htmlFor="username"> Name: </label>
        <input onChange={handleChange} name = "Name" id='username'/>

        <label htmlFor="age"> Age: </label>
        <input onChange={handleChange} name = "age" id='Age'/>

        <label htmlFor="Email"> Email: </label>
        <input onChange={handleChange} name ="Email" id='Email'/>

        <button> Submit </button>
    </form>
    </div>
    )
    }

  export default AddFriends;