import React from 'react'
import "./Landing.css"
import { Link } from "react-router-dom";



function Landing() {
  return (
    <div className='landing-screen'>
      <div className='landing-screen-info-div'>
        <div class='meta-minds-name'>Meta Minds</div>
        <img className='meta-minds-picture' src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta Minds Logo"></img>
        <div className='meta-minds-call-to-action-div-one'>Create & Discover Ideas</div>
        <div className='meta-minds-call-to-action-div-two'>Tailored To A New World</div>
        <Link to="/explore"><button className='meta-minds--explore-button'>Explore</button></Link>
      </div>
    </div>
  )
}

export default Landing;
