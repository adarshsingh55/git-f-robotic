// import logo from './logo.svg';
// import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./utility/Utils.css";
import BtNavbar from "./component/btNavbar/BtNavbar";
// import Content from "./component/Content";
import TpNavbar from "./component/tpNavbar/TpNavbar";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import Profile from "./pages/profile/Profile";
import NodeState from "./context/NodeState";
import InputContext from "./context/InputContext";
import View from "./pages/View/View";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";


function App() {
  return (
    <>
    <NodeState>
      <InputContext>
      <BrowserRouter>
        <TpNavbar />
        <BtNavbar />
        {/* <Content /> */}
        <Routes>
          <Route>
            <Route path="/" element={<Home/> } />
            <Route path="/post" element={<Post/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/view/:id" element={<View/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </InputContext>
      </NodeState>
    </>
  );
}

export default App;
