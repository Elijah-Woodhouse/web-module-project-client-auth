import React from 'react';

const Login = () => {
    return(
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username </label>
          <input id="username"></input>
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input type="password" id="password"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    )
}

export default Login;
