import React ,{ useRef,useReducer} from "react";
import "./TpNavbar.css";
import { Link} from "react-router-dom";

export default function TpNavbar() {
  const [ignore,forceUpdate] = useReducer(x=>x+1,0)
  const ref = useRef(null);
  function myFunction(e) {
    forceUpdate()
    var x = ref.current;
    if (x.className === "s") {
      x.className = " responsive";
    } else {
      x.className = "s";
    }
  }
 console.log(ignore);
 
  // React.useEffect(() => {
  //   //  console.log(location);
  //   }, []);
//  const [settoken] = useState(localStorage.getItem('token'));

  const handelLogout=()=>{
    localStorage.removeItem('token')
    myFunction()
    forceUpdate()
    // settoken(localStorage.getItem('token'))
  }

  return (<div className="c-nav  flex">
    <div className=" flex nav">
    <span className="logo">
      focus   
    </span>
    <img  src="./img/bars-solid.svg" alt="open" className="icon" onClick={(e)=>myFunction(e)} />
        {/* <span className="icon" onClick={(e)=>myFunction(e)}> */}
           {/* <i className="fa fa-bars "></i> */}
        {/* </span> */}
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
