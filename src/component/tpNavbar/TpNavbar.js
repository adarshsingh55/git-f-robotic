import React ,{ useRef,useReducer,useContext} from "react";
import "./TpNavbar.css";
import inputContext from "../../context/InNodeContext";
import { Link} from "react-router-dom";

export default function TpNavbar() {
  const context = useContext(inputContext);
  const {Reload} = context;
  const [ignore,forceUpdate] = useReducer(x=>x+1,0)
  if (Reload) {
  forceUpdate()
    
  }
  const ref = useRef(null);
  function myFunction(e) {
    var x = ref.current;
    if (x.className === "s") {
      x.className = " responsive";
    } else {
      x.className = "s";
    }
  }
 console.log(ignore);
 function handelLogin(){myFunction() 
  forceUpdate()}
 function handleSignup(){
  myFunction()
  forceUpdate()
 }
 
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
         
       {!localStorage.getItem('token')?<> <Link to="/login" className="login-btn g-btn" onClick={()=>handelLogin()}>LOGIN</Link>
        <Link to="/signup" className="sigbup-btn  g-btn" onClick={()=>handleSignup()}> SIGNUP</Link></>:<button className="g-btn"  onClick={handelLogout} type="submit">logout</button>
        }
      

      </div>
      </div>
    </div>
  );
}
