import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { Link } from "react-router-dom";
import "./Explore.css";
const postsPerLoad = 6;
let arrayForHoldingPosts = [];

function Explore(props) {
  const { posts } = props;
  const [allPosts, setAllPosts] = useState([]);
  const [nextPosts, setNextPosts] = useState(6);
  const [newPost, setNewPost] = useState([]);
  const { DateTime } = require("luxon");

  const metaPosts = posts.filter((post) => {
    return post.category === 'Meta'
  })
  const latestMetaPost = metaPosts.sort((b, a) => {
    return a.id - b.id
  })

  useEffect(async () => {
    setNewPost(latestMetaPost[0]);
    arrayForHoldingPosts = [];

    loopWithSlice(0, postsPerLoad);
  }, [posts])


  const loopWithSlice = (start, end) => {
    const metaPosts = posts.filter(post => post.category === 'Meta');
    const latestMetaPost = metaPosts.sort((b, a) => a.id - b.id)[0];
    const filteredMetaPosts = posts.filter(post => post.id !== latestMetaPost.id);
    const orderedPosts = filteredMetaPosts.sort((b, a) => {
      return b.id - a.id
    })
    console.log(orderedPosts)
    const slicedPosts = orderedPosts.reverse().slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts]
    setAllPosts(arrayForHoldingPosts);
  };

  const handleShowMorePosts = () => {
    loopWithSlice(nextPosts, nextPosts + postsPerLoad);
    setNextPosts(nextPosts + postsPerLoad);
  };

  return (
    <div >
      <img className="explore-image" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636154827/Meta-Minds/meta_vmqfci.jpg" alt="banner-mage"></img>
      <div className="latest-and-all-posts-main-div">
        <div className="latest-post-div">
          <Link to={`/view-post/${newPost?.id}`} key={newPost?.id} className="single-post-title-link-image"><img className="latest-posts-image" src={newPost?.image} alt={newPost?.title} ></img></Link>
          <div className="latest-post-details-div">
            <div className="latest-post-details-background-div"></div>
            <div className="latest-post-details-text-div">
              <h4 className="latest-post-details-date-and-category-text-div">
                <h6 className="latest-post-details-date text"> {DateTime.fromISO(`${newPost?.created_at}`).toLocaleString(DateTime.DATE_MED)}</h6>
                <img className="meta-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta-Minds-Logo"></img>
                <Link to={`/${newPost?.category}`} className="single-post-category-link"><h1 className="latest-post-details-category text">{newPost?.category}</h1></Link>
              </h4>
              <Link to={`/view-post/${newPost?.id}`} key={newPost?.id} className="single-post-title-link"><p className="latest-post-details-title text">{newPost?.title}</p></Link>
              <p className="latest-post-details-subtitle text subtitle">{newPost?.subtitle}</p>
            </div>
          </div>
        </div>
        {/* New Post Div*/}
        <div className="all-posts-div">
          {allPosts.map((post) => {
            return (
              <div className="single-post" key={post.id}>
                <Link to={`/view-post/${post.id}`} key={post.id} className="single-post-title-link"><img className="single-post-image" src={post.image} alt={post.tile} /></Link>
                <div className="single-post-detail-div">
                  <div className="single-post-date-and-category-div">
                    <h6 className="single-post-date">{DateTime.fromISO(`${post?.created_at}`).toLocaleString(DateTime.DATE_MED)}</h6>
                    <Link to={`/${post.category}`} className="single-post-category-link"><h4 class="single-post-category">{post.category}</h4></Link>
                  </div>
                  <Link to={`/view-post/${post.id}`} key={post.id} className="single-post-title-link"><h4 className="single-post-title">{post.title}</h4></Link>
                </div>
              </div>
            )
          })}
        </div>
        {/* Load More Button */}
        <div>
          {arrayForHoldingPosts.length < posts.length - 1 ? (<button className="load-more-button" onClick={handleShowMorePosts}>Load More</button>) : (<button className="load-more-button-disabled" disabled='true'>No More</button>)}
        </div>
        {/* Footer Div */}
        <Footer />
      </div>
    </div >
  )
}

export default Explore;