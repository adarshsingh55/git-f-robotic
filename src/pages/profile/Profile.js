import React ,{useContext,useEffect} from 'react'
import Items from '../../component/items/Items'
import "./Profile.css"
import noteContext from "../../context/Nodecontext";
import Spiner2 from '../../component/spiner/Spiner2';
export default function Profile() {
  const context = useContext(noteContext);
  const { getUserNotes, userNotes,getUserInfo,userInfo,Loding} = context;


  useEffect(() => {
    if (localStorage.getItem('token')) {
      
      getUserInfo()
      getUserNotes()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (<>{Loding?<Spiner2/>:
    <div>
      {!localStorage.getItem('token')?<h1>Login or signup first to see the profile !!</h1>:<>
      <div className="profile">
          <div className="edit-profile" onClick={()=>alert("comming soon")}>
          <i className="fa-solid fa-pen-to-square   " ></i>
          </div>
        <div className="user">
          <img src="/img/profile1.jpeg" alt="" className="user-img" />
          <h1 className='user-name'>
           {userInfo.user?userInfo.user.name:"login or signup"}
          </h1>
        </div>
        <div className="profile-description">
          <p className='pre'>
          {userInfo.user?userInfo.user.description:"login or signup"}
          {
            userInfo.user?"Hello i am.. I like..":"" 
           }
          </p>
        </div>
      </div>
      {userInfo.user?userNotes.map((userNotes)=>{return<Items key={userNotes._id}   show={"true"}notes={userNotes} />
        }):"no notes to display"
      } 
      </>}
    </div>}
    </>
  )
}
