import React ,{useContext,useEffect}from 'react'
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchTag]);

  return (
    <div className='container'>
      <Search/>
      {
        notes.map((notes)=>{return<Items key={notes._id} notes={notes} show={false}/>
        })
      }
    </div>
  )
}
