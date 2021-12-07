import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div class="footer-div">
      <a href=" https://www.linkedin.com/in/tyler-washington-4a8429176">
        <img class="linkedin-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637090175/Meta-Minds/icons8-linkedin-100_dvm7wk.png" alt="Tyler's LinkedIn Link"></img>
      </a>
      <div >
        <img class="meta-logo-footer" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta Minds Logo"></img>
        <h2 class="copyrights-text-footer">copyright 2021</h2>
      </div>
      <a href="https://github.com/Tyler-Washington888">
        <img className="github-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637090155/Meta-Minds/icons8-github-48_fzk9g1.png" alt="Tyler's Github Link"></img>
      </a>
    </div>
  )
}

export default Footer;