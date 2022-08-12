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

  const context1 = useContext(inputContext);

  const { deleteNote} = context1;
  const { userNotes ,setUserNotes } = context;

  const handelClick =(id)=>{
    navigate(`/view/${id}`)
  }
  return (
    <div>
        <div  className="items le">
          <div  onClick={()=>handelClick(notes._id)} className="flex ">
        <img className='items-img' src="/img/code.jpeg" alt="sory" />
        <div className='items-content'>
          <div className="items-title">
        { notes.projectName}
        <div className='item-icon'>
          </div>
          </div>
            <div className='discription'>
              {notes.description}
            </div>
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
