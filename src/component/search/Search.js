import React ,{useRef,useContext,useEffect}from 'react'
import noteContext from '../../context/Nodecontext';
import "./Search.css"

export default function Search() {

  const context = useContext(noteContext);
  const { setSearchTag} = context;
  const ref = useRef(null);
  useEffect(() => {
    setSearchTag("Web development")
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  const handelChange =()=>{
    setSearchTag(ref.current.value)
  }

    var arr = [  'Web development' , 'App development' , 'Automotive' , 'Drone' , 'Robot' , 'Tanks' ]
  return (
    <div className='search'>
        <select ref={ref} className='search-btn' name="search" id="search-tag" onChange={()=>{handelChange()}}>
       {
    arr.map((element)=>{
        return(<option key={element} value={element }> {element}</option> )
    })
       }

        </select>
    </div>
  )
}
