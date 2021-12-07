import React from 'react'
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import "./Mana.css";
import { Link } from "react-router-dom";

function Mana(props) {
  const { posts } = props;
  const [allPosts, setAllPosts] = useState([]);
  const { DateTime } = require("luxon");


  useEffect(async () => {
    const metaPosts = await posts.filter((post) => {
      return post.category === 'Mana';
    });
    const latestPosts = metaPosts.sort((b, a) => {
      return a.id - b.id
    });
    setAllPosts(latestPosts);
  }, [posts])


  return (
    <div>
      <img className="mana-banner-image" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637555469/Meta-Minds/mana_iv9sve.jpg" alt="mana-banner-image"></img>
      <div className="mana-posts-div">
        <div className="each-mana-post-outer-div">
          {allPosts.map(post => {
            return (
              <Link to={`/view-post/${post.id}`} key={post.id} className="each-mana-post-inner-div-link"><div class="each-mana-post-inner-div" key={post?.id}>
                <div className="each-mana-post-date-and-title-div">
                  <h6 className="each-mana-post-date">{DateTime.fromISO(`${post?.created_at}`).toLocaleString(DateTime.DATE_MED)}</h6>
                  <h4 className="each-mana-post-title">{post?.title}</h4>
                </div>
                <img className="each-mana-post-image" src={post?.image} alt={post?.tile} />
              </div></Link>
            )
          })}
        </div>
        <Footer />
      </div>
    </div >
  )
}

export default Mana;