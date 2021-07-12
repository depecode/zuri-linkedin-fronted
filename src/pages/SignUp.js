import React, { useState } from 'react'
import Axios from "axios"

export default function SignUp() {

   const url = "https://the-netflix-clone.herokuapp.com/accounts/api/register/"
    const [data, setData] = useState({  
      username: "",
      password: ""
  })
    function submit(e){
      e.preventDefault();
      Axios.post(url, {
          username : data.username,
          email: data.username,
          password: data.password,
          password2: data.password2
      })
      .then(res => {
        console.log(res.data)
      })
    }

    function handle(e){
      const newData = {...data}
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(newData)
    }

    return (
        <section  id="nf-signup">
        <div className="nav">
            <h2 className="logo">NETFLIX</h2>
            <p><a className="signin">Sign In</a></p>
        </div>
        <div className="nf-signup-form">
            <p className="nf-step">STEP <span>1</span> OF <span>3</span></p>
<div>
<h1 className="nf-welcome">Welcome back!</h1>
<h1>Joining Netflix is easy.</h1>  
</div>
<form onSubmit={(e)=> submit(e)}>


            <p className="nf-enter">Enter your password and you'll be watching in no time.</p> 

            <div className="nf-email">
              <label>Email</label>
              <p onChange={(e) => handle(e)} id="username" value={data.username}>hello@email.com</p>
              </div>

              <input onChange={(e) => handle(e)} id="password" value={data.password} type="password"  placeholder="Enter your password" />   
            <p>Forgot your password?</p>
            <button>Next</button>
            </form>

</div> 
  
  <div className="nf-footer" style={{backgroundColor: "#f3f3f3", maxHeight: "300px", color: "#757575"}}>
      <h5>Questions? Contact us.</h5>
      <div className="nf-footer-row">
        <div  className="nf-footer-col">
      <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Cookie Preferences</a></li>
          </ul>
     </div>
  
     <div className="nf-footer-col">
       <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Corporate Information</a></li>

          </ul>
     </div>
  
     <div  className="nf-footer-col">
     <ul>
     <li><a href="#">Terms of Use</a></li>

        
          </ul>
     </div>
  
     <div  className="nf-footer-col">
     <ul>
     <li><a href="#">Privacy</a></li>

          
          </ul>
     </div>
      </div>
     <div>
     </div>
  </div>
  
  
        
      </section>
    )
}