import React, { useEffect, useState } from 'react';
import "./Explore.css";
const postsPerLoad = 6;
let arrayForHoldingPosts = [];

function Explore(props) {
  const { posts } = props;
  const [newestMetaPost, setNewestMetaPost] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [nextPosts, setNextPosts] = useState(6);
  const { DateTime } = require("luxon");

  const loopWithSlice = (start, end,) => {
    const metaPosts = posts.filter(post => post.category == 'Meta');
    const latestMetaPost = metaPosts.sort((b, a) => a.id - b.id)[0];
    const filteredMetaPosts = posts.filter(post => post.id !== latestMetaPost.id);
    const slicedPosts = filteredMetaPosts.reverse().slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setAllPosts(arrayForHoldingPosts);
  };

  useEffect(() => {
    const metaPosts = posts.filter(post => post.category == 'Meta');
    const latestMetaPost = metaPosts.sort((b, a) => a.id - b.id)[0];
    setNewestMetaPost(latestMetaPost);
    loopWithSlice(0, postsPerLoad);
  }, [])

  const handleShowMorePosts = () => {
    loopWithSlice(nextPosts, nextPosts + postsPerLoad);
    setNextPosts(nextPosts + postsPerLoad);
  };

  return (
    <div class="explore-page">
      <img class="explore-image" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636154827/Meta-Minds/meta_vmqfci.jpg" alt="banner image"></img>
      <div class="latest-and-all-posts">
        <div class="latest-post-div">
          <img class="latest-post-image" src={newestMetaPost.image} alt={newestMetaPost.title}></img>
          <div class="latest-post-details-div">
            <div class="latest-post-details-background-div"></div>
            <div class="latest-post-details-text-div">
              <h4 class="latest-post-details-date-and-category-text-div">
                <h6 class="latest-post-details-date text"> {DateTime.now(newestMetaPost.created_at).toLocaleString(DateTime.DATE_MED)}</h6>
                <img class="meta-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta Minds Logo"></img>
                <h1 class="latest-post-details-category text">{newestMetaPost.category}</h1>
              </h4>
              <p class="latest-post-details-title text">{newestMetaPost.title}</p>
              <p class="latest-post-details-subtitle text subtitle">{newestMetaPost.subtitle}</p>
            </div>
          </div>
        </div>
        <div class="all-posts-div">
          {allPosts.map(post => {
            return (
              <div class="single-post" key={post.id}>
                <img class="single-post-image" src={post.image} alt={post.tile} />
                <div class="single-post-detail-div">
                  <h4 class="single-post-title">{post.title}</h4>
                  <div class="single-post-date-and-category-div">
                    <h6 class="single-post-date">{DateTime.now(post.created_at).toLocaleString(DateTime.DATE_MED)}</h6>
                    <h4 class="single-post-category">{post.category}</h4>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div>
          <button className="button" onClick={handleShowMorePosts}>Load More</button>
        </div>
        <div className='footer-divs'>
          <a href="https://github.com/Tyler-Washington888">
            <img className="github-logos" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637090175/Meta-Minds/icons8-linkedin-100_dvm7wk.png" alt="Meta Minds Logo"></img>
          </a>
          <div class="met-logo-divs">
            <img className="met-logos" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta Minds Logo"></img>
            <h2 className='copyrights'>copyright 2021</h2>
          </div>
          <a href="https://www.linkedin.com/in/tyler-washington-4a8429176">
            <img className="linkedin-logos" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637090155/Meta-Minds/icons8-github-48_fzk9g1.png" alt="Meta Minds Logo"></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Explore;