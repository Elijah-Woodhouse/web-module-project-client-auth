import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const push = useNavigate();
    const [cred, setCred ] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    console.log(cred);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/api/login", cred)
            .then(res => {
                console.log(res.data.token);
                localStorage.setItem("token", res.data.token);
                push('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}> 
        <div>
          <label htmlFor="username">Username </label>
          <input onChange={handleChange} name="username" id="username"></input>
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input onChange={handleChange} name="password" type="password" id="password"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    )
}

export default Login;
