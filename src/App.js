// import logo from './logo.svg';
import { useState } from "react";

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
import Button from "./component/button/Button";

function App() {
  // const [List, setList] = useState([]);
  // // console.log(List);
  // let toastProperties = null;
  // const showToast = (type) => {
  //   // console.log("show toast");
  //   switch (type) {
  //     case "success":
  //       toastProperties = {
  //         id: List.length+1,
  //         title: "success",
  //         description: "this is a success button",
  //         backgoundColor: "#5cb85c",
  //       };
  //       break;
  //     case "danger":
  //       toastProperties = {
  //         id: List.length+1,
  //         title: "danger",
  //         description: "this is a danger button",
  //         backgoundColor: "#d9534f",
  //       };
  //       break;
        
  //       case "info":
  //         toastProperties = {
  //           id: List.length+1,
  //           title: "info",
  //           description: "this is a info button",
  //           backgoundColor: "#5bc0de",
  //         };
  //         break;
  //       case "warning":
  //         toastProperties = {
  //           id: List.length+1,
  //           title: "warning",
  //           description: "this is a warning button",
  //           backgoundColor: "#f0ad4e",
  //         };
  //         break;
  //         default:
  //           toastProperties=[];
  //         }
  //         setList([...List ,toastProperties]);
  // };
  return (
    <>
          <BrowserRouter>
      <NodeState>
        <InputContext>
            <TpNavbar />
            <BtNavbar />
            <div className="container">
              {/* <Button handelClick={() => showToast("success")}>success</Button>
              <Button handelClick={() => showToast("danger")}>danger</Button>
              <Button handelClick={() => showToast("info")}>info</Button>
              <Button handelClick={() => showToast("warning")}>warning</Button> */}
              {/* <Alert2 toastList={List} position="bottom-right" setList={setList} /> */}
              <Alert2 position="bottom-right"/>
              {/* <Content /> */}
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
