import React, { useState, useContext ,useRef,useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Update.css";
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



export default function Update() {

// const dompurify = createDomPurify(new JSDOM().window)
const {id} =useParams()
const ref = useRef(null);
  const [ActiveCad, setActiveCad] = useState("markdown");

  const context1 = useContext(noteContext);
  const { searchTag, setSearchTag,content ,getData } = context1;
  const {description,projectName,sanitizedHtml, generalTag,youtubeLink,blogID, bloggerID,tag}=content.getData
  const context = useContext(inputContext);
  const { editNote } = context;
  const [data, setdata] = useState("");
  const [chat, setchat] = useState(0);

  const handleChange = ( editor) => {
    alert("not working")
    let data = editor.getData();
    setdata(data);
  };
   
  const [note, setnote] = useState({
    projectName:"",
    links:"",
    description: "",
    sanitizedHtml: "",
    generalTag: "",
    markdown:ActiveCad==="markdown"?"":"",
    tag:"",
    blogID:"",
    bloggerID:""
  });
  useEffect(() => {
    setnote({
      projectName: projectName?projectName:"",
      links: youtubeLink?youtubeLink:"",
      description: description?description:"",
      sanitizedHtml: data?data:"",
      generalTag: searchTag?searchTag:"",
      markdown:ActiveCad==="markdown"?sanitizedHtml:"",
      tag:tag?tag:"",
      blogID:blogID?blogID:"",
      bloggerID:bloggerID?bloggerID:""
    });
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content])
  
  // projectName, youtubeLink,description,sanitizedHtml ,tag,generalTag
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };


  const handleClick = async(e) => {
    let marked1
    if  (ActiveCad==="markdown") {  
    marked1 =await marked.parse(ref.current.value);
  //  console.log(marked1);
   }
    editNote(id,note.projectName, note.links, note.description,ActiveCad==="text"?data:marked1, searchTag,note.tag,blogID,bloggerID);

    e.preventDefault();
    setnote({
      projectName: "",
      links: "",
      description: "",
      generalTag: "Web development",
      markdown:"",
      tag:""
    });
    setSearchTag("Web development");
    // console.log(data);
    setchat(0);
    setdata("");
  };


  useEffect(() => {
    getData(id)
    setSearchTag(generalTag)
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return (
    <div >
      <div className="post">
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
        <div className="title post-inputs">
          <label htmlFor="title">custum tag</label>
          <input
            name="tag"
            onChange={onChange}
            required
            value={note.tag}
            type="text"
          />
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
            <button className="btn-50" onClick={() => setActiveCad("Blogger")}>Through blogger</button>
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
              {ActiveCad === "Blogger" && (
          <div className="post-blogger post-inputs">
          <label htmlFor="links">your blog id</label>
          <input
            type="text"
            name="blogID"
            value={note.blogID}
            onChange={onChange}
            required
            />
          <label htmlFor="links">your blogger id</label>
          <input
            type="text"
            name="bloggerID"
            value={note.bloggerID}
            onChange={onChange}
            required
          />
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
        <button onClick={(e)=>handleClick(e)} className="post-btn">
          {" "}
          Publish
        </button>
      </div>
    </div>
  );
}
