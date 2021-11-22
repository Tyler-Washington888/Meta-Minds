import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-div'>
      <img className="github-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637090175/Meta-Minds/icons8-linkedin-100_dvm7wk.png" alt="Meta Minds Logo"></img>
      <div>
        <img className="met-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta Minds Logo"></img>
        <h2 className='copyright'>copyright 2021</h2>
      </div>
      <img className="linkedin-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637090155/Meta-Minds/icons8-github-48_fzk9g1.png" alt="Meta Minds Logo"></img>
    </div>
  )
}

export default Footer;