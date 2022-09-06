import React, {  useContext  } from "react";
// import "./Post.css";
import inputContext from "../../context/InNodeContext";
// import noteContext from "../../context/Nodecontext";
// import { marked } from "marked";
// import createDomPurify from "dompurify"
// import {JSDOM} from "jsdom"
// import dompurify from "createDomPurify(new JSDOM().window)";
// import Editor from "./Editor";
// import Search from "../../component/search/Search";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Spiner2 from "../../component/spiner/Spiner2";
import FormContent from "../../component/FormContent/FormContent";

export default function Post() {

  const context = useContext(inputContext);
  const { Loding} = context;
 
  return (<>
  {!localStorage.getItem('token')?<h1>Login first to write content</h1>:<div >
      {Loding?<Spiner2/>:<></>}
    <FormContent/>
    </div>}
    </>
  );
}
