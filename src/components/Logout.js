import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const push = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
    

        axios.post("http://localhost:9000/api/logout", {}, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log(res);
                localStorage.removeItem('token');
                push('/login');
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return(
        <div>
            <h2>You have Been Logged Out</h2>
        </div>
    )
}

export default Logout;