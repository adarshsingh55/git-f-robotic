import React ,{useState}from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Editor() {
    const [data, setdata] = useState("");
    const [chat, setchat] = useState(0);

const handleChange =(e,editor)=>{
const data =editor.getData();
setdata(data);
}
  return (
    <div>
    <CKEditor className="ckeditor" editor={ClassicEditor} data={chat} onChange={handleChange} ></CKEditor>    
    </div>
  )
}
