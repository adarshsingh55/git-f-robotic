import React, {useContext,useEffect} from 'react'
import noteContext from '../../context/Nodecontext'
import { useParams } from "react-router-dom";

import "./View.css"
function View() {
  
  const context = useContext(noteContext);
  const { content ,getData } = context;
  const {id} =useParams()
  useEffect(() => {
    getData(id)
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])  
  
  return (
    <div >
    <div className=' view'>
      <div className="projectName">{content.getData.projectName}</div>
      {/* <span className="view-tag">{content.getData.generalTag}</span> */}
      <div className="view-links" dangerouslySetInnerHTML={{__html:content.getData.youtubeLink}}></div>
      <div className='view-description'>{content.getData.description}</div>
    </div>
      <div className="view-html" dangerouslySetInnerHTML={{__html:content.getData.sanitizedHtml}}></div>
    </div>
  )
}

export default View
