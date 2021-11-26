import React from 'react'
import { useEffect, useState } from 'react';
import "./Mana.css";

function Mana(props) {
  const { posts } = props;
  // const [newestMetaPost, setNewestMetaPost] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const { DateTime } = require("luxon");


  useEffect(() => {
    const metaPosts = posts.filter(post => post.category == 'Mana');
    const latestPosts = metaPosts.sort((b, a) => a.id - b.id);
    setAllPosts(latestPosts);
  }, [])

  return (
    <div>
      <img class="explore-imagest" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637555469/Meta-Minds/mana_iv9sve.jpg" alt="banner image"></img>
      <div class="latest-and-all-postsst">
        <div class='brot'>
          {allPosts.map(post => {
            return (
              <div class="single-postst" key={post?.id}>
                <div class='yot'>
                  <h6 class="single-post-datest">{DateTime.now(post.created_at).toLocaleString(DateTime.DATE_MED)}</h6>
                  <h4 class="single-post-titlest">{post?.title}</h4>
                </div>
                <img class="single-post-imagest" src={post?.image} alt={post?.tile} />
              </div>
            )
          })}
        </div>
        <div className='footer-div'>
          <a href="https://github.com/Tyler-Washington888">
            <img className="github-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637090175/Meta-Minds/icons8-linkedin-100_dvm7wk.png" alt="Meta Minds Logo"></img>
          </a>
          <div class="met-logo-div">
            <img className="met-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta Minds Logo"></img>
            <h2 className='copyright'>copyright 2021</h2>
          </div>
          <a href="https://www.linkedin.com/in/tyler-washington-4a8429176">
            <img className="linkedin-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637090155/Meta-Minds/icons8-github-48_fzk9g1.png" alt="Meta Minds Logo"></img>
          </a>
        </div>
      </div>
    </div >
  )
}

export default Mana;