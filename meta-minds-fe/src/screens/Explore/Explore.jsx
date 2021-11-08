import React, { useEffect, useState } from 'react';
import Layout from "../../components/Layout/Layout"
import "./Explore.css"


function Explore(props) {
  const { posts } = props
  const [newestPost, setNewestPost] = useState([])
  const [allPosts, setAllPosts] = useState([])
  useEffect(() => {
    const singlePost = posts.sort((a, b) => b.updated_at - a.updated_at)[0]
    setNewestPost(singlePost)
    setAllPosts(posts.filter(post => post.id !== singlePost.id))
  }, [])

  console.log(posts)

  return (
    <div>
      <div>
        <img className="header-image-div" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636154827/Meta-Minds/meta_vmqfci.jpg"></img>
      </div>
      <div className="main-component-div">
        <div >
          <img src={newestPost.image} alt={newestPost.title}></img>
          <div>
            <h4>{newestPost.title}</h4>
            <h4>{newestPost.category}</h4>
          </div>
        </div>
        <div className="all-posts">
          {allPosts.map(post => {
            return (
              <div key={post.id}>
                <img src={post.image} alt={post.tile} />
                <div>
                  <h4>{post.title}</h4>
                  <h4>{post.category}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Explore;