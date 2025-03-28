import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/LoginUser";
import UserList from "./pages/UserList";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/users/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
