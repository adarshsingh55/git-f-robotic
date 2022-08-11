import React from "react";
import "./BtNavbar.css";
import { Link,useLocation,useNavigate} from "react-router-dom";
export default function BtNavbar() {
  let location =useLocation()
  return (
    <>
      <div className="bnavbar flex ">
        <Link to="/" className={`${location.pathname ==="/"?"active":""}`}>
        <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </Link>
        <Link to="/post" className={`nav-link ${location.pathname ==="/post"?"active":""}`}>
          <i className="fa-solid fa-feather-pointed"></i>
          <span>Post</span>
        </Link>
        <Link to="/profile" className={`nav-link ${location.pathname ==="/profile"?"active":""}`}>
          <i className="fa-solid fa-user-secret"></i>
          <span>Profile</span>
        </Link>
      </div>
    </>
  );
}
