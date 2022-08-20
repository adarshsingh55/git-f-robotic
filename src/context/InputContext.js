import React ,{useState}from "react";
import inputContext from "./InNodeContext";
import { useNavigate} from "react-router-dom";
function InputContext(props) {
  const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  // const host = "http://localhost"
  const host = "https://focusedguide.herokuapp.com";
  
  const [Loding, setLoding] = useState(false);

  const [List, setList] = useState([]);
  // console.log(List);
  let toastProperties = null;
  const showToast = (type,description) => {
    // console.log("show toast");
    switch (type) {
      case "success":
        toastProperties = {
          id: List.length+1,
          title: "success",
          description: description,
          backgoundColor: "#5cb85c",
        };
        break;
      case "danger":
        toastProperties = {
          id: List.length+1,
          title: "danger",
          description: description,
          backgoundColor: "#d9534f",
        };
        break;
        
        case "info":
          toastProperties = {
            id: List.length+1,
            title: "info",
            description: description,
            backgoundColor: "#5bc0de",
          };
          break;
        case "warning":
          toastProperties = {
            id: List.length+1,
            title: "warning",
            description: description,
            backgoundColor: "#f0ad4e",
          };
          break;
          default:
            toastProperties=[];
          }
          setList([...List ,toastProperties]);
  };

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
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
        // "auth-token": token,
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
   let  json = await response.json();
    if (json.success) {
      // save the token and redirect
      showToast("success","Your data is published successfully successfully!");
      setLoding(false)
      navigate(`/view/${json.id}`)
    } else {
      setLoding(false)
      showToast("warning","some error occer");
    }
    // const note =await response.json();
    // setNote(notes.concat(note))
    // notes.unshift(note);
    // setNote(notes)
    // console.log(notes);
  };

  // 5 post signup (/user/signup)---------------------------------------
  const Signup = async (name, email, password) => {
    let url = `${host}/user/signup`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      // save the token and redirect
      showToast("success","you have signed successfully!");
      localStorage.setItem("token", json.authtoken);
      setLoding(false)
      window.history.back();
    } else {
      setLoding(false)
      showToast("warning","invalid cradential");
    }
  };

  // 6 post login (/user/login)------------------------------------------------------
  const Login = async (email, password) => {
    let url = `${host}/user/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      // save the token and redirect
      showToast("success","you are authanticated")
      localStorage.setItem("token", json.authtoken);
      window.history.back();
      setLoding(false)
    } else {
      showToast("warning","invalid cradential", "danger");
      // console.log(json);
    setLoding(false)
      // setNote(json)
    }
  };

  //3 Delete a note  (content/deletenote/)-----------------------------------------
  const deleteNote = async (id, notes, setNote) => {
    // console.log("deletion the note with id" + id);
    let newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNote(newNote);
    let url = `${host}/content/deletedata/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    if (json.success) {
      showToast("danger","content has been deleted successfuly");
    } else {
      showToast("warning","some problem occer");
    }
  };

  //4 Edit a notes
  const editNote = async (id,   projectName,
    youtubeLink,
    description,
    sanitizedHtml,
    generalTag,
    tag) => {
    // let notes
    let url = `${host}/content/updatedata/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({   projectName,
        youtubeLink,
        description,
        sanitizedHtml,  
        generalTag,
        tag}),
    });
    const json = response.json({   projectName,
      youtubeLink,
      description,
      sanitizedHtml,
      generalTag,
      tag});
    console.log(json);

    // let newNotes = await JSON.parse(JSON.stringify(notes));
    // for (let index = 0; index < newNotes.length; index++) {
    //   const element = newNotes[index];
    //   if (element._id === id) {
    //     newNotes[index].title = title;
    //     newNotes[index].description = description;
    //     newNotes[index].tag = tag;
    //     break;
    //   }
    // }
    // setNote(newNotes);
  };
  
  return (
    <div>
      <inputContext.Provider value={{ 
        addData, 
        Signup, 
        Login, 
        deleteNote,
        editNote,
         List,
         setList ,
         Loding,
          setLoding
          }}>
        {props.children}
      </inputContext.Provider>
    </div>
  );
}

export default InputContext;
