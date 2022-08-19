import React,{useState,useContext} from 'react'
import Spiner2 from '../../component/spiner/Spiner2';
import inputContext from '../../context/InNodeContext';
import "./Login.css"
function Login() {
    const context = useContext(inputContext);
    const { Login ,Loding, setLoding} = context;
    // setLoding(false)
    const [note, setnote] = useState({
        Email: "",
        Password: "",
     
      }); 
    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value });
  };
  
  const handelsubmit = (e) => {
    setLoding(true)
    e.preventDefault();
    Login(note.Email,note.Password)
}

  return (
    <div>

<form onSubmit={ handelsubmit} className="signup">
    <h1>LOGIN</h1>
        <div className="discription post-inputs">
          <label htmlFor="description">Email</label>
          <input
            type="email"
            onChange={onChange}
            required
            value={note.Email}
            name="Email"
          />
        </div>
        <div className="post-links post-inputs">
          <label htmlFor="links">Password</label>
          <input
            type="text"
            name="Password"
            value={note.Password}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit"  className="post-btn">Submit</button>
      </form>
      {Loding?<Spiner2/>:<></>}
    </div>
  )
}
  
export default Login
