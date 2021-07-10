import React from 'react'

export default function SignUp() {
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


            <p className="nf-enter">Enter your password and you'll be watching in no time.</p> 

            <div className="nf-email">
              <label>Email</label>
              <p>hello@email.com</p>
              </div>

              <input type="password"  placeholder="Enter your password" style={{backgroundColr: "#f3f3f3",
    border: "1px solid #333"}}/>   
            <p>Forgot your password?</p>
            <button>Next</button>
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