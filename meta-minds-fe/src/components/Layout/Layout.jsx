import React from 'react'
import Header from "../../components/Header/Header"
import ScrollToTop from '../ScrollToTop'


export default function Layout(props) {

  const { currentUser, handleLogout, posts } = props
  return (
    <div>
      {/* <div>
        <Header currentUser={currentUser} posts={posts} handleLogout={handleLogout} />
      </div> */}
      <div>
        <Header currentUser={currentUser} posts={posts} handleLogout={handleLogout} />
        {props.children}
      </div>
    </div>
  )
}
