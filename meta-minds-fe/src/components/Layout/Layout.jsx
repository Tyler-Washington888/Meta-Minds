import React from 'react'
import Header from "../../components/Header/Header"


export default function Layout(props) {

  const { currentUser, handleLogout } = props
  return (
    <div>
      <div>
        <Header currentUser={currentUser} handleLogout={handleLogout} />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}
