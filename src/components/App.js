
import React from "react";
import './../styles/App.css';
import { Route, Routes } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserList from "./UserList";

const App = () => {
  return (
    <div>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="profile/:id"  element={<UserDetails />}/>
          </Routes>
    </div>
  )
}

export default App
