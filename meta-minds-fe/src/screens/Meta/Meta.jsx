import React from 'react'
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import "./Meta.css";
import MetaImage from "/Users/tylerwashington/new-work/Meta-Minds/meta-minds-fe/src/assets/images/MetaImage.jpg"
import { Link } from "react-router-dom";

function Meta(props) {
  const { posts } = props;
  const [allPosts, setAllPosts] = useState([]);
  const { DateTime } = require("luxon");


  useEffect(async () => {
    const metaPosts = await posts.filter((post) => {
      return post.category === 'Meta'
    });
    const latestPosts = await metaPosts.sort((b, a) => {
      return a.id - b.id;
    });
    setAllPosts(latestPosts);
  }, [posts])

  return (
    <div>
      <img className="meta-banner-image" src={MetaImage} alt="meta-banner-image"></img>
      <div className="meta-posts-div">
        <div className="each-meta-post-outer-div">
          {allPosts.map(post => {
            return (
              <Link to={`/view-post/${post.id}`} key={post.id} className="each-meta-post-inner-div-link"><div className="each-meta-post-inner-div" key={post.id}>
                <div className="each-meta-post-date-and-title-div">
                  <h6 className="each-meta-post-date">{DateTime.fromISO(`${post?.created_at}`).toLocaleString(DateTime.DATE_MED)}</h6>
                  <h4 className="each-meta-post-title">{post.title}</h4>
                </div>
                <img className="each-meta-post-image" src={post.image} alt={post.tile} />
              </div></Link>
            )
          })}
        </div>
        <Footer />
      </div>
      <div className='meta-mobile'>
        <div className='meta-mobile-outer-div'>
          {allPosts.map(post => {
            return (
              <Link to={`/view-post/${post.id}`} key={post.id} className="meta-mobile-inner-div-link"><div className="meta-mobile-inner-div" key={post.id}>
                <div className='meta-posts-date-and-title'>
                  <div className='meta-mobile-date'>{DateTime.fromISO(`${post?.created_at}`).toLocaleString(DateTime.DATE_MED)}</div>
                  <div className='meta-mobile-title'>{post.title}</div>
                </div>
                <img className='meta-mobile-image' src={post.image} alt={post.tile} />
              </div></Link>
            )
          })}
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

export default Meta;