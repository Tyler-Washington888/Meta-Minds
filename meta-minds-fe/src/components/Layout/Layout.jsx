import React from 'react'
import Header from "../../components/Header/Header"


export default function Layout(props) {

  const { currentUser, handleLogout, posts } = props
  return (
    <div>
      <div>
        <Header currentUser={currentUser} posts={posts} handleLogout={handleLogout} />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}
