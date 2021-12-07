import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import "./UserPosts.css";



export default function YourPosts(props) {
  const { currentUser, posts } = props
  const [allPosts, setAllPosts] = useState([])
  const [newestPost, setNewestPost] = useState([])
  const { DateTime } = require("luxon");

  useEffect(async () => {
    const userPosts = await posts.filter((post) => {
      return post.user_id === currentUser.id
    })
    const mostRecentPost = await userPosts.sort((b, a) => {
      return a.id - b.id
    })
    setNewestPost(mostRecentPost[0])
    setAllPosts(userPosts)
  }, [posts, currentUser,])

  return (
    <div>
      <img className="user-post--banner-image" src={newestPost?.image} alt={newestPost?.title}></img>
      <div className="user-post-and-button-div">
        <div className="create-post-button-div">
          <button className="create-post-button"><Link to='/create-post' className="create-post-button-link" >Create Post</Link></button>
        </div>
        <div class="user-post-outer-div">
          {allPosts.map(post => {
            return (
              <Link to={`/view-post/${post.id}`} key={post.id} className="user-post-inner-div-link"><div className="user-post-inner-div" key={post?.id}>
                <div className="user-post-date-and-title-div">
                  <h6 className="user-post-date">{DateTime.fromISO(`${post?.created_at}`).toLocaleString(DateTime.DATE_MED)}</h6>
                  <h4 className="user-post-title">{post?.title}</h4>
                </div>
                <img className="user-post-image" src={post?.image} alt={post?.tile} />
              </div></Link>
            )
          })}
        </div>
        <Footer />
      </div>
    </div >
  )
}
