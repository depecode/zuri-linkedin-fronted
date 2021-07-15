import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Link } from 'react-router-dom'

import Accordion from '../components/Accordion'

 
export default function Home() {
    const [username, setUsername] = useState('')
    const history = useHistory();

    function auth()
    {
      history.push({pathname:"/sign-up",
      state:{
          key:username
       }})
       console.log("username", username);
    }

    const accordionData = [
        {
                title: 'What is Netflix?',
                content: `Netflix is a streaming service  that offers wide variety of award - winning  TV shows ,movies,anime and documenties , and more on thousand of internet -connected devices.
                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                `
            },
            {
                title: 'How much does Netflix cost?',
                content: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.
                `
            },
            {
                title: 'Where can i watch ?',
                content: `Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.

                Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                `
            },
            {
                title: 'How do i cancel ?',
                content: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`
            },
            {
                title: 'What can i watch on Netflix ?',
                content: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`
            },
            {
                title: 'Is Netflix good for kids ?',
                content: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
            }
        ];

    const {title, content} = accordionData;
  
  return (
    <section>
      <div className="card">
        <img
          className="hero-banner-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/0f28b5b4-261c-4d61-b6ba-1c75f0b7e79e/NG-en-20210607-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />

        <div className="nf-home-overlay">
          <div className="nav-bar">
            <h2 className="logo">NETFLIX</h2>
            <button className="btn-signin">
              <Link to="/sign-in">Sign In</Link>
            </button>
          </div>
          <div className="hero">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h5>Watch anywhere. Cancel anytime.</h5>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <input
              type="email"
              placeholder="Email Address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={auth}>Get Started</button>
          </div>
        </div>
      </div>

      <div className="card nf-enjoy">
        <div className="left">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>

        <div className="right">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
        </div>
      </div>

      <div className="card nf-download">
        <div className="left">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
        </div>

        <div className="right">
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </div>

      <div className="card nf-watch">
        <div>
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
      </div>

      <div className="card nf-create">
        <div className="left">
          <img
            src="https://occ-0-778-784.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
            alt=""
          />
        </div>

        <div className="right">
          <h1>Create profiles for kids.</h1>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>

      <div className="card nf-question">
        <div>
          <h1>Frequently Asked Questions.</h1>
          <div>
            <ul>
              <div>
                {accordionData.map(({ title, content }) => (
                  <Accordion title={title} content={content} />
                ))}
              </div>
            </ul>
          </div>
          <div className="nf-question-ready">
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <input
              type="email"
              value={username}
              placeholder= "Email Address"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={auth}>Get Started</button>
          </div>
        </div>
      </div>

      <div className="card nf-footer">
        <h5>Questions? Contact us.</h5>
        <div className="nf-footer-row">
          <div className="nf-footer-col">
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Speed Test</a>
              </li>
            </ul>
          </div>

          <div className="nf-footer-col">
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
            </ul>
          </div>

          <div className="nf-footer-col">
            <ul>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Ways to Watch</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
              <li>
                <a href="#">Only on Netflix</a>
              </li>
            </ul>
          </div>

          <div className="nf-footer-col">
            <ul>
              <li>
                <a href="#">Media Center</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <p>Netflix Nigeria</p>
      </div>
    </section>
  );
}
