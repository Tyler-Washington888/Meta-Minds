import React from 'react'
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import "./Meta.css";
import MetaImage from "../../services/MetaImage.jpg"
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';

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
    </div >
  )
}

export default Meta;