import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {

  // const logout = () => {
  //   axios.post("http://localhost:9000/api/logout", { userToken: localStorage.getItem("token")})
  //     .then(res => {
  //       console.log("you have logged out", res);
  //       localStorage.removeItem("token");
  //       window.location.href = '/login';
  //     })
  //     .catch(err => console.log(err))
  // }


  return (
        <div className="App">
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/friends" element={<FriendsList/>}/>
            <Route path="/friends/add" element={<AddFriend/>}/>
          </Routes>
        </div>
  );
}

export default App;
