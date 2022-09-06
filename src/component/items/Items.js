import React, {useContext} from 'react'
import "./Items.css"
import { useNavigate} from "react-router-dom";
import noteContext from '../../context/Nodecontext';
import inputContext from '../../context/InNodeContext';
export default function Items(props)
 {
  const navigate = useNavigate();
  const { notes } = props;

  const context = useContext(noteContext);
  const { userNotes ,setUserNotes } = context;

  const context1 = useContext(inputContext);
  const { deleteNote} = context1;


  const handelClick =(id)=>{
    navigate(`/view/${id}`)
  }

  return (
    <div>
        <div  className="items le">
          <div  onClick={()=>handelClick(notes._id)} className="flex ">
        <img className='items-img' src="/img/code.jpeg" alt="sory" />
        <div className='items-content'>
          {notes.tag?<div className="items-tag">{notes.tag}</div>:""}
          <div className="items-title">
        { notes.projectName}
        {/* <div className='item-icon'>
          </div> */}
          </div>
            <div className='discription'>
              {notes.description}
            </div>
            <div className='items-rdmore'>read more...</div>
            <div className="items-date" style={{  marginRight:"2px"}}>{new Date(notes.date).toLocaleDateString()}</div>
        </div>
        </div>
        {props.show==="true"?
        <div className="show">
           <i onClick={()=>{deleteNote(notes._id,userNotes,setUserNotes)}} className="fa-solid fa-trash-can icon-delete "  ></i>
           <i className="fa-solid fa-pen-to-square icon-delete  " onClick={()=>navigate(`/update/${notes._id}`)} ></i>
        </div>:<></>}
          </div>
    </div>
  )
}
