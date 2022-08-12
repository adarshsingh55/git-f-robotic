import React ,{ useRef} from "react";
import "./TpNavbar.css";
import { Link} from "react-router-dom";

export default function TpNavbar() {
  const ref = useRef(null);
  function myFunction() {
    var x = ref.current;
    if (x.className === "s") {
      x.className = " responsive";
    } else {
      x.className = "s";
    }
  }
  

  const handelLogout=()=>{
    localStorage.removeItem('token')
    myFunction()
  }

  return (<div className="c-nav  flex">
    <div className=" flex nav">
    <span className="logo">
      focus   
    </span>
        <span className="icon" onClick={(e)=>myFunction(e)}>  <i className="fa fa-bars "></i>
        </span>
        </div>
<div className="s" ref={ref}>
      <div className=" flex topnav links" >
   
        <Link to="#news">About</Link>
         <div>
       {!localStorage.getItem('token')?<> <Link to="/login" className="login-btn g-btn" onClick={()=>myFunction()}>LOGIN</Link>
        <Link to="/signup" className="sigbup-btn  g-btn" onClick={()=>myFunction()}> SIGNUP</Link></>:<button className="g-btn" onClick={handelLogout} type="submit">logout</button>
        }
        </div>

      </div>
      </div>
    </div>
  );
}
