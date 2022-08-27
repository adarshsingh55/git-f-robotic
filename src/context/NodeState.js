import React from "react";
import noteContext from "./Nodecontext";
import { useState } from "react";

function NodeState(props) {
  // 0 Alert fountion -------
  // 1 get notes by general tag------  
  // 2 get notes by user id ()------
  // 3 get user info  ---------
  //4 get a spasific notes by its id----------


  const [Loding, setLoding] = useState(true);
  

  // const token =localStorage.getItem('token')
  // const host = "http://localhost"
  const host = "https://focusedguide.herokuapp.com"
  // 0 Alert fountion -------------------------------------
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

  // const host = "https://focusedguide.herokuapp.com";

  // 1 get notes by general  tag------------------------------------------------------
  const [notes, setNote] = useState([]);
  const [searchTag, setSearchTag] = useState("Web development");
  const getNotesByTag = async (serchTag) => {
    let url = `${host}/content/getbygeneraltag`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ generalTag: searchTag}),
    });
    const json = await response.json();
    // console.log(json);
    setNote(json);
    setLoding(false)
  };

  // 2 get notes by user id ()----------------------------------------------------
  const [userNotes, setUserNotes] = useState([]);
  const getUserNotes = async () => {
    let url = `${host}/content/fetchall`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
        // "auth-token": token,
      },
    });
    const json = await response.json();
    setUserNotes(json);
    setLoding(false)
  };

  // 3 get user info  ---------------------------------------------------
  const [userInfo, setUserInfo] = useState({ user: "" });
  const getUserInfo = async () => {
    let url = `${host}/user/getuser`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
        // "auth-token": token,
      },
    });
    const json = await response.json();
    setUserInfo(json);
  };


   //3 get data () note
   const [content, setContent] = useState({ getData: "" });
   
   const getData = async (id) => {
    // setLoding(true)
    setContent({ getData: "" })
    let url = `${host}/content/getdata/${id}`;
    const response = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
        // "auth-token":token
      },
    });
    const json = await response.json();
      setContent(json)
      console.log(json);
  };

  //  return -----------------------------------------------------------
  return (
    <div>
      <noteContext.Provider
        value={{
          getNotesByTag,
          notes,
          userNotes,
          setUserNotes,
          getUserNotes,
          getUserInfo,
          userInfo,
          searchTag,
          setSearchTag,
          getData,
          content,
          Loding
          
        }}
      >
        {props.children}
      </noteContext.Provider>
    </div>
  );
}

export default NodeState;
