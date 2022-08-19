import React ,{useContext,useEffect}from 'react'
import Items from '../../component/items/Items'
import Search from '../../component/search/Search'
// import Spiner from '../../component/spiner/Spiner';
import Spiner2 from '../../component/spiner/Spiner2';
import noteContext from "../../context/Nodecontext";
import "./Home.css"
// import Items from '../Items'

export default function Home() {
  const context = useContext(noteContext);
  const { notes,Loding, getNotesByTag ,searchTag} = context;
  
  
  
  useEffect(() => {
    getNotesByTag(searchTag)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchTag]);

  return (
    <div>
       <Search/>
       {Loding && <Spiner2/>}
      {
        notes.map((notes)=>{return<Items key={notes._id} notes={notes} show={false}/>
        })
      }
    </div>
  )
}
