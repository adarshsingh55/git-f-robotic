import React, {useContext} from 'react'
import noteContext from '../../context/Nodecontext'
import "./View.css"
function View() {
  const context = useContext(noteContext);
  const { content } = context;
  return (
    <div className="container">
    <div className=' view'>
      <div className="projectName">{content.getData.projectName}</div>
      <span className="view-tag">{content.getData.generalTag}</span>
      <div className="view-links" dangerouslySetInnerHTML={{__html:content.getData.youtubeLink}}></div>
      <div className='view-description'>{content.getData.description}</div>
      <div className="view-html" dangerouslySetInnerHTML={{__html:content.getData.sanitizedHtml}}></div>
    </div>
    </div>
  )
}

export default View
