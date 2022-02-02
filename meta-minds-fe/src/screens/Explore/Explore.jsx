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
  const [mostPopularMetaPost, setMostPopularMetaPost] = useState([])
  const { DateTime } = require("luxon");

  const metaPosts = posts.filter((post) => {
    return post.category === 'Meta'
  })
  const latestMetaPost = metaPosts.sort((a, b) => {
    return a.id - b.id
  })
  const firstLatestMetaPost = latestMetaPost[2]

  useEffect(() => {
    setMostPopularMetaPost(firstLatestMetaPost)
    arrayForHoldingPosts = [];
    loopWithSlice(0, postsPerLoad);
  }, [posts])

  const loopWithSlice = (start, end) => {
    const metaPosts = posts.filter(post => post.category == 'Meta');
    const latestMetaPost = metaPosts.sort((a, b) => {
      return a.id - b.id
    })
    const importantMetaPost = latestMetaPost[2]
    const filteredMetaPosts = posts.filter(post => post.id !== importantMetaPost.id);
    const orderedPosts = filteredMetaPosts.sort((b, a) => {
      return b.id - a.id
    })
    const slicedPosts = orderedPosts.reverse().slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts]
    setAllPosts(arrayForHoldingPosts);
  };

  const handleShowMorePosts = () => {
    loopWithSlice(nextPosts, nextPosts + postsPerLoad);
    setNextPosts(nextPosts + postsPerLoad);
  };

  return (
    <div>
      <img className="explore-image" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636154827/Meta-Minds/meta_vmqfci.jpg" alt="banner-mage"></img>
      <div className="latest-and-all-posts-main-div">
        <div className='mobile-latest-post-div'>
          <Link to={`/view-post/${mostPopularMetaPost?.id}`} key={mostPopularMetaPost?.id} className="moble-latest-post-link"><img className="moble-latest-post-image" src={mostPopularMetaPost?.image} alt={mostPopularMetaPost?.title} ></img></Link>
          <div className='mobile-latest-post-details-div'>
            <div className='mobile-latest-post-date-and-category-div'>
              {mostPopularMetaPost != {} ? (<div className='mobile-latest-post-date'>{DateTime.fromISO(`${mostPopularMetaPost?.created_at}`).toLocaleString(DateTime.DATE_MED)}</div>) : (<div></div>)}
              <Link to={`/${mostPopularMetaPost?.category}`} className="single-post-category-link-mobile"><div className='mobile-latest-post-category'>{mostPopularMetaPost?.category}</div></Link>
            </div>
            <Link to={`/view-post/${mostPopularMetaPost?.id}`} key={mostPopularMetaPost?.id} className="mobile-latest-post-title">{mostPopularMetaPost?.title}</Link>
          </div>
        </div>

        <div className="latest-post-div">
          <Link to={`/view-post/${mostPopularMetaPost?.id}`} key={mostPopularMetaPost?.id} className="single-post-title-link-image"><img className="latest-posts-image" src={mostPopularMetaPost?.image} alt={mostPopularMetaPost?.title} ></img></Link>
          <div className="latest-post-details-div">
            <div className="latest-post-details-background-div"></div>
            <div className="latest-post-details-text-div">
              <div className="latest-post-details-date-and-category-text-div">
                <h6 className="latest-post-details-date"> {DateTime.fromISO(`${mostPopularMetaPost?.created_at}`).toLocaleString(DateTime.DATE_MED)}</h6>
                <img className="meta-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta-Minds-Logo"></img>
                <Link to={`/${mostPopularMetaPost?.category}`} className="single-post-category-link"><h1 className="latest-post-details-category">{mostPopularMetaPost?.category}</h1></Link>
              </div>
              <Link to={`/view-post/${mostPopularMetaPost?.id}`} key={mostPopularMetaPost?.id} className="single-post-title-link"><p className="latest-post-details-title">{mostPopularMetaPost?.title}</p></Link>
              <p className="latest-post-details-subtitle ">{mostPopularMetaPost?.subtitle}</p>
            </div>
          </div>
        </div>

        <div className='all-posts-mobile-div'>
          {allPosts?.map((post) => {
            return (
              <div key={post?.id} className='each-single-mobile-post'>
                <Link to={`/view-post/${post?.id}`} className="each-single-mobile-post-image-link"><img className="each-single-mobile-post-image" src={post?.image} alt={post?.tile} /></Link>
                <div className='each-single-mobile-post-details-div'>
                  <div className='each-single-mobile-post-details-date-and-category-div'>
                    <div className='each-single-mobile-post-details-date'>{DateTime.fromISO(`${post?.created_at}`).toLocaleString(DateTime.DATE_MED)}</div>
                    <Link to={`/${post?.category}`} className="single-post-category-link-mobile"> <div className='each-single-mobile-post-details-category'>{post?.category}</div></Link>
                  </div>
                  <Link to={`/view-post/${post?.id}`} className='each-single-mobile-post-details-title single-title-category-link-mobile'>{post?.title}</Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className="all-posts-div">
          {allPosts?.map((post) => {
            return (
              <div className="single-post" key={post?.id}>
                <Link to={`/view-post/${post?.id}`} className="single-post-title-link"><img className="single-post-image" src={post?.image} alt={post?.tile} /></Link>
                <div className="single-post-detail-div">
                  <div className="single-post-date-and-category-div">
                    <h6 className="single-post-date">{DateTime.fromISO(`${post?.created_at}`).toLocaleString(DateTime.DATE_MED)}</h6>
                    <Link to={`/${post?.category}`} className="single-post-category-link"><h4 className="single-post-category">{post?.category}</h4></Link>
                  </div>
                  <Link to={`/view-post/${post?.id}`} className="single-post-title-link"><h4 className="single-post-title">{post?.title}</h4></Link>
                </div>
              </div>
            )
          })}
        </div>
        <div>
          {arrayForHoldingPosts.length < posts.length - 1 ? (<button className="load-more-button" onClick={handleShowMorePosts}>Load More</button>) : (<button className="load-more-button-disabled" disabled={true}>No More</button>)}
        </div>
        <Footer />
      </div>
      <div className='badscreen'>
        <div className="modal-page"></div>
        <div className="modal-div">
          <div className="modal-title-div">
            <div className="modal-title-text-warning" >We're Sorry</div>
            <div className="modal-title-text">Meta Minds is not yet compatible with this screen size</div>
            <div className="modal-title-text-view-read-me">View Readme for more details</div>
          </div>
          <div className="modal-decision-divs">
            <a className="modal-cancel-buttons" href="https://github.com/Tyler-Washington888/Meta-Minds">Readme</a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Explore;