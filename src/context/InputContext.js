import React from "react";
import inputContext from "./InNodeContext";
function InputContext(props) {
  const token =localStorage.getItem('token')
  // const host = "http://localhost"
  const host = process.env.REACT_APP_LOCAL_HOST;

  // 4  post request data(/content/postdata)--------------------------------------
  const addData = async (
    projectName,
    youtubeLink,
    description,
    sanitizedHtml,
    generalTag,
    tag
  ) => {
    // api call
    let url = `${host}/content/postdata`;
    let addfile = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "auth-token":localStorage.getItem('token'),
        "auth-token": token,
      },
      body: JSON.stringify({
        projectName,
        youtubeLink,
        description,
        sanitizedHtml,
        generalTag,
        tag,
      }),
    });
    // const note =await response.json();
    console.log(addfile);
    // setNote(notes.concat(note))
    // notes.unshift(note);
    // setNote(notes)
    // console.log(notes);
  };

// 5 post signup (/user/signup)
  const Signup =async (name ,email,password) => {
    let url = `${host}/user/signup`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email,password}),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the token and redirect
      localStorage.setItem('token',json.authtoken)
    } else {
      alert("invalid cradential","danger")
    }
  }

  // 6 post signup (/user/login)
 const Login= async (email,password) => {
    let url = `${host}/user/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email:email,
        password:password
      }),
    });
    const json = await response.json();
    if (json.success) {
      // save the token and redirect
      localStorage.setItem('token',json.authtoken)
    }else{
    alert("invalid cradential","danger")
    console.log(json);
    // setNote(json)
    }
  };

  return (
    <div>
      <inputContext.Provider value={{ addData,Signup,Login }}>
        {props.children}
      </inputContext.Provider>
    </div>
  );
}

export default InputContext;
