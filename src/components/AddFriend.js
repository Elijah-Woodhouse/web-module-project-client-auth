import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddFriend = () => {

    const push = useNavigate();
    const [ form, setForm ] = useState({
        name: "",
        age: "",
        email: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
    })
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post("http://localhost:9000/api/friends", form, {
            headers: {
                authorization: token
            } 
        })
            .then(res => {
                console.log(res);
                push("/friends")
            })
            .catch(err => {
                console.log(err);
            })
    }

    console.log(form);

    return(
    <div>
         <h2>AddFriend</h2>
         <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input onChange={handleChange} name="name" id="username"/>
            </div>
            <div>
                <label htmlFor="age">Age: </label>
                <input onChange={handleChange} name='age' id="age"/>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input onChange={handleChange} name='email' id="email"></input>
            </div>
            <button>Submit</button>
         </form>
    </div>
    )
  }

export default AddFriend;