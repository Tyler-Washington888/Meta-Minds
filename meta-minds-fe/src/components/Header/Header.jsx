import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

function Header(props) {
  const { currentUser, handleLogout } = props



  return (

    <div className="header-div">
      <div className='header-div-app-title'>Meta Minds</div>
      <div className='header-div-categories-and-user-auth'>
        <div className="header-div-category">
          <div>Latest</div>
          <div>Meta</div>
          <div>Mana</div>
          <div>Crypto</div>
          <div>Conspiracy</div>
        </div>
        {currentUser ? (
          <div className='header-div-user'>
            <p>Welcome {currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
            <Link to={`/user-posts/${currentUser?.id}`}><div>Your Posts</div></Link>
          </div>
        ) : (
          <div className="header-div-non-user">
            <Link to='/sign-up'><div>Sign Up</div></Link>
            <Link to='/sign-in'><div>Sign In</div></Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header;

