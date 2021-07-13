import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { useHistory } from "react-router-dom";


export default function SignUp() {

  const history = useHistory();

  useEffect(() => {
    if(localStorage.getItem('user-info')){
      history.push("/dashboard")
    }
  }, [])

   const url = "https://the-netflix-clone.herokuapp.com/accounts/api/register/"
    const [data, setData] = useState({  
      username: history.location.state.key,
      password: ""
  })
  var bodyFormData = new FormData();
  bodyFormData.append('username', history.location.state.key);
  bodyFormData.append('email', history.location.state.key);
  bodyFormData.append('password', data.password);
  bodyFormData.append('password2', data.password);

    function submit(e){
      e.preventDefault();
      // Axios.post(url, {
      //     username : history.location.state.key,
      //     email: history.location.state.key,
      //     password: data.password,
      //     password2: data.password
      // })
      // .then(res => {
      //   console.log(res.data)
      // })

      Axios({
        method: "post",
        url: url,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
          localStorage.setItem('user-info',JSON.stringify(response))
          history.push("/dashboard")
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }

    function handle(e){
      const newData = {...data}
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(newData)
      console.log(history.location.state.key)
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
              <p onChange={(e) => handle(e)} id="username" value={data.username}>{history.location.state.key}</p>
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