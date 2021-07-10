import React from "react";

export default function Home() {
  return (
    <section>
    <div className="card">
      <img className="hero-banner-img"  src="https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/0f28b5b4-261c-4d61-b6ba-1c75f0b7e79e/NG-en-20210607-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>

        <div className="nav-bar">
            <h2 className="logo">NETFLIX</h2>
            <button className="btn-signin">Sign In</button>
        </div>     <div className="nav-bar">
            <h2 className="logo">NETFLIX</h2>
            <button className="btn-signin">Sign In</button>
        </div>
        <div className="hero">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h5>Watch anywhere. Cancel anytime.</h5>
            <p>
            Ready to watch? Enter your email to create or restart your membership.
            </p>
            <input type="email" placeholder="Email Address" />
            <button>Get Started</button>
        </div>
    </div>
     

      <div className="card nf-enjoy">
        <div className="left">
            <h1>Enjoy on your TV.</h1>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>

        <div className="right">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
        </div>
      </div>


      <div className="card nf-download">

        <div className="left">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
        </div>

        <div className="right">
            <h1>Download your shows to watch offline.</h1>
            <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </div>


<div className="card nf-watch">

    <div>
        <h1>Watch everywhere.</h1>
        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
    </div>
</div>



<div className="card nf-create">
    <div className="left">
        <img src="https://occ-0-778-784.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" alt="" />
    </div>

    <div className="right">
        <h1>Create profiles for kids.</h1>
        <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
    </div>
</div>

<div className="card nf-question">

    <div>
        <h1>Frequently Asked Questions.</h1>
        <div>
            <ul>
                <li>What is Netflix?</li>
                <li>How much does Netflix cost?</li>
                <li>Where can I watch?</li>
                <li>How do I cancel?</li>
                <li>What can I watch on Netflix?</li>
                <li>Is Netflix good for kids?</li>
            </ul>
        </div>
        <div className="nf-question-ready">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <input type="email"/>
            <button>Get Started</button>
        </div>
    </div>
</div>


<div className="card nf-footer">
    <h5>Questions? Contact us.</h5>
<div className="nf-footer-row">
<div className="nf-footer-col">
        <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Speed Test</a></li>
        </ul>
   </div>

   <div className="nf-footer-col">
     <ul>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Cookie Preferences</a></li>
        <li><a href="#">Legal Notices</a></li>
        </ul>
   </div>

   <div className="nf-footer-col">
   <ul>
        <li><a href="#">Account</a></li>
        <li><a href="#">Ways to Watch</a></li>
        <li><a href="#">Corporate Information</a></li>
        <li><a href="#">Only on Netflix</a></li>
        </ul>
   </div>

   <div className="nf-footer-col">
   <ul>
        <li><a href="#">Media Center</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Contact Us</a></li>
        </ul>
   </div>
</div>
   
   <p>Netflix Nigeria</p>
</div>


      
    </section>
  );
}
