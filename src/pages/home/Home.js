import React ,{useContext,useEffect,useState}from 'react'
import Items from '../../component/items/Items'
import Search from '../../component/search/Search'
import noteContext from "../../context/Nodecontext";
import "./Home.css"
// import Items from '../Items'

export default function Home() {
  const context = useContext(noteContext);
  const { notes, getNotesByTag ,searchTag} = context;
  
  
  
  useEffect(() => {
    getNotesByTag(searchTag)
  },[searchTag]);

  return (
    <div className='container'>
      <Search/>
      {
        notes.map((notes)=>{return<Items key={notes._id} notes={notes} />
        })
      }
    </div>
  )
}
