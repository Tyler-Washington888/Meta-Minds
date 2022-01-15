import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import "./UserPosts.css";



export default function YourPosts(props) {
  const { currentUser, posts } = props
  const [allPosts, setAllPosts] = useState([])
  const [newestPost, setNewestPost] = useState([])
  const [loading, setLoading] = useState(false)
  const { DateTime } = require("luxon");


  useEffect(async () => {
    setLoading(true);
    const userPosts = await posts.filter((post) => {
      return post.user_id === currentUser?.id
    })
    const mostRecentPost = await userPosts.sort((b, a) => {
      return a.id - b.id
    })
    setNewestPost(mostRecentPost[0])
    setAllPosts(userPosts)
    setLoading(false);
  }, [posts, currentUser])


  return (
    <div>
      <img className="user-posts-banner-image" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638051076/Meta-Minds/decentraland_naqec7.jpg" alt="Create-Post-Banner"></img>
      <div className="user-post-and-button-div">
        <div className="create-post-button-div">
          <button className="create-post-button"><Link to='/create-post' className="create-post-button-link" >Create Post</Link></button>
        </div>
        {newestPost === undefined && loading === false ? (
          <h2 className='firstpost'>Begin influencing the development of Web3 by making your first post!</h2>
        )
          : (newestPost === [] && loading === true ? (<div>Loading...</div>) : (<div></div>))}
        <div className="user-post-outer-div">
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
      <div className='user-posts-mobile'>
        <div className="create-post-button-div">
          <button className="create-post-button"><Link to='/create-post' className="create-post-button-link" >Create Post</Link></button>
        </div>
        {newestPost === undefined && loading === false ? (
          <h2 className='firstpost'>Begin influencing the development of Web3 by making your first post!</h2>
        )
          : (newestPost === [] && loading === true ? (<div>Loading...</div>) : (<div></div>))}
        <div className='user-posts-mobile-outer-div'>
          {allPosts.map(post => {
            return (
              <Link to={`/view-post/${post.id}`} key={post.id} className="user-posts-mobile-inner-div-link"><div className="user-posts-mobile-inner-div" key={post.id}>
                <div className='user-posts-posts-date-and-title'>
                  <div className='user-posts-mobile-date'>{DateTime.fromISO(`${post?.created_at}`).toLocaleString(DateTime.DATE_MED)}</div>
                  <div className='user-posts-mobile-title'>{post.title}</div>
                </div>
                <img className='user-posts-mobile-image' src={post.image} alt={post.tile} />
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
