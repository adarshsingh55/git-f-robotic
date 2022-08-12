import React ,{useContext,useEffect} from 'react'
import Items from '../../component/items/Items'
import "./Profile.css"
import noteContext from "../../context/Nodecontext";
export default function Profile() {
  const context = useContext(noteContext);
  const { getUserNotes, userNotes,getUserInfo,userInfo } = context;


  useEffect(() => {
    getUserNotes()
    getUserInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className='container'>
      <div className="profile">
        <div className="user">
          <img src="/img/profile2.jpeg" alt="" className="user-img" />
          <h1 className='user-name'>
           {userInfo.user?userInfo.user.name:"login or signup"}
          </h1>
        </div>
        <div className="description">
          <p className='pre'>
          {userInfo.user?userInfo.user.description:"login or signup"}
          </p>
        </div>
      </div>
      {userInfo.user?userNotes.map((userNotes)=>{return<Items key={userNotes._id}   show={"true"}notes={userNotes} />
        }):"no notes to display"
      } 
    </div>
  )
}
