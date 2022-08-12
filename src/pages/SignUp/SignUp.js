import React ,{useState,useContext}from 'react'
import "./Signup.css"
import inputContext from '../../context/InNodeContext';
function SignUp() {

  const context = useContext(inputContext);
  const { Signup } = context;
    const [note, setnote] = useState({
        Name: "",
        Email: "",
        Password: "",
      }); 


    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value });
  };
  
  const handelsubmit = async (e) => {
    e.preventDefault();
Signup(note.Name,note.Email,note.Password)
setnote({
  Name: "",
  Email: "",
  Password: "",
})
}

  return (
    <div className='container'>
      <form onSubmit={ handelsubmit} className="signup">
      <div className="title post-inputs">
          <label htmlFor="title">Name</label>
          <input
            name="Name"
            onChange={onChange}
            required
            value={note.Name}
            minLength={3}
            type="text"
          />
        </div>
        <div className="discription post-inputs">
          <label htmlFor="description">Email</label>
          <input
            type="email"
            onChange={onChange}
            required
            value={note.Email}
            minLength={5}
            name="Email"
          />
        </div>
        <div className="post-links post-inputs">
          <label htmlFor="links">Password</label>
          <input
            type="text"
            name="Password"
            value={note.Password}
            minLength={5}
            onChange={onChange}
            required
          />
        </div>
        <div className="post-links post-inputs">
          <label htmlFor="links">Password</label>
          <input
            type="text"
            name="Password"
            value={note.Password}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="post-btn">Submit</button>
      </form>
    </div>
  )
}

export default SignUp