import React, {useContext} from 'react'
import "./Items.css"
import { useNavigate} from "react-router-dom";
import noteContext from '../../context/Nodecontext';
export default function Items(props) {
  const navigate = useNavigate();
  const { notes } = props;

  const context = useContext(noteContext);
  const { getData } = context;

  const handelClick =(id)=>{
    navigate(`/view/${id}`)
    getData(id)
  }
  return (
    <div onClick={()=>handelClick(notes._id)}>
        <div className="items">
        <img className='items-img' src="/img/profile1.jpeg" alt="sory" />
        <div className='items-content'>
          <div className="items-title">
        { notes.projectName}
        <div className='item-icon'>
          {/* <i className="fa-solid fa-trash-can mx-2 " onClick={()=>{deleteNote(note._id)}} ></i>
          <i className="fa-solid fa-pen-to-square mx-2  " onClick={()=>{updateNote(note)}} ></i> */}
          <i className="fa-solid fa-trash-can mx-2 "  ></i>
          <i className="fa-solid fa-pen-to-square mx-2  "  ></i>
          </div>
          </div>
            <div className='discription'>
              {notes.description}
            </div>
        </div>
      </div>
    </div>
  )
}
