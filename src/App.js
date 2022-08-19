// import logo from './logo.svg';
// import { useState } from "react";

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
import Update from "./pages/Update/Update";
// import Alert from "./component/alert/Alert";
import Alert2 from "./component/alert/Alert2";
// import Button from "./component/button/Button";

function App() {
  return (
    <>
          <BrowserRouter>
      <NodeState>
        <InputContext>
            <TpNavbar />
            <BtNavbar />
            <div className="container">
              <Alert2 position="bottom-right"/>
              <Routes>
                <Route>
                  <Route path="/" element={<Home />} />
                  <Route path="/post" element={<Post />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/view/:id" element={<View />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/update/:id" element={<Update />} />
                </Route>
              </Routes>
            </div>
        </InputContext>
      </NodeState>
          </BrowserRouter>
    </>
  );
}

export default App;
