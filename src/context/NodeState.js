import React from "react";
import noteContext from "./Nodecontext";
import { useState } from "react";

function NodeState(props) {
  // 1 get notes by general tag------  
  // 2 get notes by user id ()------
  // 3 get user info  ---------

  const token =localStorage.getItem('token')
  // const host = "http://localhost"
  const host = process.env.REACT_APP_LOCAL_HOST;

  // 1 get notes by general tag------------------------------------------------------
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
  };

  // 2 get notes by user id ()----------------------------------------------------
  const [userNotes, setUserNotes] = useState([]);
  const getUserNotes = async () => {
    let url = `${host}/content/fetchall`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "auth-token":localStorage.getItem('token')
        "auth-token": token,
      },
    });
    const json = await response.json();
    setUserNotes(json);
  };

  // 3 get user info  ---------------------------------------------------
  const [userInfo, setUserInfo] = useState({ user: "" });
  const getUserInfo = async () => {
    let url = `${host}/user/getuser`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "auth-token":localStorage.getItem('token')
        "auth-token": token,
      },
    });
    const json = await response.json();
    setUserInfo(json);
  };


   //3 get data () note
   const [content, setContent] = useState({ getData: "" });
   
   const getData = async (id) => {
    // console.log("deletion the note with id" + id);
    let newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNote(newNote)
    let url = `${host}/content/getdata/${id}`;
    const response = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        // "auth-token":localStorage.getItem('token')
        "auth-token":token
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
          content
        }}
      >
        {props.children}
      </noteContext.Provider>
    </div>
  );
}

export default NodeState;
