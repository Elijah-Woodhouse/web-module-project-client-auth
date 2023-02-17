import React, { useEffect } from 'react';
import axios from 'axios';

const Logout = () => {

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