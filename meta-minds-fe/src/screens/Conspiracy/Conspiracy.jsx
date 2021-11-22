import React from 'react'
import "./Conspiracy.css";
import { useEffect, useState } from 'react';

function Conspiracy(props) {
  const { posts } = props;
  // const [newestMetaPost, setNewestMetaPost] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const { DateTime } = require("luxon");


  useEffect(() => {
    const metaPosts = posts.filter(post => post.category == 'Conspiracy');
    const latestPosts = metaPosts.sort((b, a) => a.id - b.id);
    // setNewestMetaPost(latestMetaPost);
    setAllPosts(latestPosts);
    // loopWithSlice(0, postsPerLoad);
  }, [])

  return (
    <div>
      <img class="explore-imagestsu" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637123958/Meta-Minds/ready_player_one_eol12i.jpg" alt="banner image"></img>
      <div class="latest-and-all-postsstsu">
        <div class='brotsu'>
          {allPosts.map(post => {
            return (
              <div class="single-poststsu" key={post.id}>
                <div class='yotsu'>
                  <h6 class="single-post-datestsu">{DateTime.now(post.created_at).toLocaleString(DateTime.DATE_MED)}</h6>
                  <h4 class="single-post-titlestsu">{post.title}</h4>
                </div>
                <img class="single-post-imagestsu" src={post.image} alt={post.tile} />
              </div>
            )
          })}
        </div>
        <div className='footer-divsu'>
          <a href="https://github.com/Tyler-Washington888">
            <img className="github-logosu" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637090175/Meta-Minds/icons8-linkedin-100_dvm7wk.png" alt="Meta Minds Logo"></img>
          </a>
          <div class="met-logo-divsu">
            <img className="met-logosu" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta Minds Logo"></img>
            <h2 className='copyrightsu'>copyright 2021</h2>
          </div>
          <a href="https://www.linkedin.com/in/tyler-washington-4a8429176">
            <img className="linkedin-logosu" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637090155/Meta-Minds/icons8-github-48_fzk9g1.png" alt="Meta Minds Logo"></img>
          </a>
        </div>
      </div>
    </div >
  )
}

export default Conspiracy;