import React from "react";

export default function SignIn() {
  return (
    <section>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b8e09d9c-d1e7-4800-afd9-810e41ace684/369018c9-6a93-4162-8d3b-f3488ad8c686/NG-en-20210607-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
    <div className="nf-signin">

        <div className="nf-signin-form">
          <h1>Sign In</h1>
          <input type="text" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />

          <button>Sign In</button>
          <div className="nf-check">
            <p><input type="checkbox" /> Remember me</p>
            <p className="nf-check-help">Need help?</p>
          </div>
          <div className="nf-social-auth">
            <i className="fa fa-facebook"></i>
            <p>Login with Facebook</p>
          </div>
          <div className="nf-new">
            <p>New to Netflix?</p>
            <p>Sign up now</p>
          </div>
          <p className="nf-signin-footer">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="#">Learn more.</a>
          </p>
        </div>

      <div className="nf-footer">
        <h5>Questions? Contact us.</h5>

        <div className="nf-footer-row">
        <div className="nf-footer-col">
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
          </ul>
        </div>

        <div className="nf-footer-col">
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
          </ul>
        </div>

        <div className="nf-footer-col">
          <ul>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>

        <div className="nf-footer-col">
          <ul>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        </div>
        </div>

      </div>
    </section>
  );
}
