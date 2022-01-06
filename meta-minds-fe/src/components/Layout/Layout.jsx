import React from 'react'
import Header from "../../components/Header/Header"


export default function Layout(props) {

  const { currentUser, handleLogout, posts, openHamburger, setOpenHamburger } = props
  return (
    <div>
      <div>
        <Header currentUser={currentUser} posts={posts} handleLogout={handleLogout} openHamburger={openHamburger} setOpenHamburger={setOpenHamburger} />
        {props.children}
      </div>
    </div>
  )
}
