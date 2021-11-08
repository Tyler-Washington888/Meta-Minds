import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function YourPosts(props) {

  const { currentUser, posts } = props
  const [allPosts, setAllPosts] = useState([])
  useEffect(() => {
    const userPosts = posts.filter((post) => {
      return post.user_id === currentUser.id
    })
    setAllPosts(userPosts)
  }, [posts, currentUser,])


  return (
    <div>
      <Link to='/create-post'><button>Create Post</button></Link>
      <div className="all-posts">
        {allPosts.map(post => {
          return (
            <div key={post.id}>
              <img src={post.image} alt={post.tile} />
              <div>
                <h4>{post.title}</h4>
                <h4>{post.category}</h4>
              </div>
              <Link to={`/update-post/${post.id}`}><button>Edit Post</button></Link>
              <Link to={`/view-post/${post.id}`}><button>View Post</button></Link>
            </div>
          )
        })}
      </div>
    </div>
  )

}
