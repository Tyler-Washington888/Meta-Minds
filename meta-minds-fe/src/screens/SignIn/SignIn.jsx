import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import "./SignIn.css";


function SignIn(props) {
  const [formData, setFormData] = useState({
    username: 'GuestTesterOne',
    password: '1234567',
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='sign-in-div'>
      <div className='outer-div-desktop'>
        <div className="meta-minds-logo-div">
          <img className="sign-in-meta-minds-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta Minds Logo"></img>
          <h2 className='sign-in-copyright-text'>copyright 2022</h2>
        </div >
        <form className='sing-in-form'
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData);
          }}
        >
          <h3 className='sign-in-header-text'>Sign-In</h3>
          <label className='sign-in-label-and-input-div'>
            <div className='input-text-title'>Username</div>
            <input
              className='user-input-box'
              type='text'
              name='username'
              value={username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className='sign-in-label-and-input-div'>
            <div className='input-text-title'>Password</div>
            <input
              className='user-input-box'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button className='sign-in-button'>Sign In</button>
        </form>
        <div className='link-to-sign-up-div'>
          <h1 className="new-to-site-text">New to Meta Minds?</h1>
          <Link to='/sign-up'><button className='link-to-sign-up-button'>Sign Up</button></Link>
        </div>
      </div>


      <div className='outer-div-mobile'>
        <div className="mobile-meta-minds-logo-div">
          <img className="mobile-sign-in-meta-minds-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta Minds Logo"></img>
          <h2 className='mobile-sign-in-copyright-text'>copyright 2022</h2>
        </div >
        <form className='mobile-sing-in-form'
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData);
          }}
        >
          <h3 className='mobile-sign-in-header-text'>Sign-In</h3>
          <label className='mobile-sign-in-label-and-input-div'>
            <div className='mobile-input-text-title'>Username</div>
            <input
              className='mobile-user-input-box'
              type='text'
              name='username'
              value={username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className='mobile-sign-in-label-and-input-div'>
            <div className='mobile-input-text-title'>Password</div>
            <input
              className='mobile-user-input-box'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button className='mobile-sign-in-button'>Sign In</button>
        </form>
        <div className='mobile-link-to-sign-up-div'>
          <h1 className="mobile-new-to-site-text">New to Meta Minds?</h1>
          <Link to='/sign-up'><button className='mobile-link-to-sign-up-button'>Sign Up</button></Link>
        </div>
      </div>
    </div >
  );
}

export default SignIn;
