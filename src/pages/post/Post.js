import React, { useState, useContext ,useRef } from "react";
import "./Post.css";
import inputContext from "../../context/InNodeContext";
import noteContext from "../../context/Nodecontext";
import { marked } from "marked";
// import createDomPurify from "dompurify"
// import {JSDOM} from "jsdom"
// import dompurify from "createDomPurify(new JSDOM().window)";
// import Editor from "./Editor";
import Search from "../../component/search/Search";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Spiner2 from "../../component/spiner/Spiner2";

export default function Post() {
// const dompurify = createDomPurify(new JSDOM().window)
const ref = useRef(null);
  const [ActiveCad, setActiveCad] = useState("text");

  const context1 = useContext(noteContext);
  const { searchTag, setSearchTag} = context1;

  const context = useContext(inputContext);
  const { addData ,Loding,
    setLoding} = context;
  const [data, setdata] = useState("");
  const [chat, setchat] = useState(0);
  // const [ignore,forceUpdate] = useReducer(x=>x+1,0)
  const handleChange = (e, editor) => {
    let data = editor.getData();
    setdata(data);
  };
 

  const [note, setnote] = useState({
    projectName: "",
    links: "",
    description: "",
    sanitizedHtml: data,
    generalTag: searchTag,
    markdown:""
  });
  // projectName, youtubeLink,description,sanitizedHtml ,tag,generalTag
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };


  const handelsubmit = async(e) => {
    e.preventDefault();

    setLoding(true)
    // let marked1 =await marked.parse(ref.current.value);
    // console.log(marked1);
    // console.log("all is fine untill now");
    let marked1
     if  (ActiveCad==="markdown") {  
     marked1 =await marked.parse(ref.current.value);
    // console.log(marked1);
    }
    addData(note.projectName, note.links, note.description,ActiveCad==="text"?data:marked1, searchTag);

    e.preventDefault();
    setnote({
      projectName: "",
      links: "",
      description: "",
      generalTag: "Web development",
      markdown:""
    });
   await setSearchTag("Web development");
    // console.log(data);
    setchat(0);
    // console.log(ignore);
     await setdata("");
    //  console.log(data)
    // forceUpdate()
  };

  return (<>
  {!localStorage.getItem('token')?<h1>Login first to write content</h1>:<div >
      {Loding?<Spiner2/>:<></>}
      <form onSubmit={(e)=> handelsubmit(e)} className="post">
        <div className="title post-inputs">
          <label htmlFor="title">Title</label>
          <input
            name="projectName"
            onChange={onChange}
            required
            value={note.projectName}
            minLength={5}
            type="text"
          />
        </div>
        <div className="Tag post-inputs">
          <label htmlFor="discription" className="lable-tag">
            Tag:
          </label>
          <span>
            <Search />
          </span>
        </div>
        <div className="discription post-inputs">
          <label htmlFor="description">Discription</label>
          <input
            type="text"
            onChange={onChange}
            required
            value={note.description}
            name="description"
          />
        </div>
        <div className="post-links post-inputs">
          <label htmlFor="links">links</label>
          <input
            type="text"
            name="links"
            value={note.links}
            onChange={onChange}
            required
          />
        </div>
        <div className="">
          <span>content</span>
          <div>
            <button className="btn-50" onClick={() => setActiveCad("text")}>Text</button>
            <button  className="btn-50" onClick={() => setActiveCad("markdown") }>Markdown</button>
          </div>
          <div className="post-md">
            {ActiveCad === "markdown" && (
              <div className="post-markdow">
                <textarea
                ref={ref}
                  name="markdown"
                  value={note.markdown}
                  onChange={onChange}
                  id="markdown"
                  cols="90vw"
                  rows="20"
                ></textarea>
              </div>
            )}
            {ActiveCad === "text" && (
              <div>
                <CKEditor
                  className="ckeditor"
                  editor={ClassicEditor}
                  data={chat}
                  onChange={handleChange}
                ></CKEditor>
              </div>
            )}
          </div>
        </div>
        <button type="submit"  className="post-btn">
          Publish
        </button>
       
      </form>
    </div>}
    </>
  );
}
