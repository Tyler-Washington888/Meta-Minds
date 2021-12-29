import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import "./SignIn.css";


function SignIn(props) {
  const [formData, setFormData] = useState({
    username: 'GuestTesterOne',
    password: 'GuestTester1234',
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
    <div class='sign-in-div'>
      <div class="meta-minds-logo-div">
        <img className="meta-minds-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta Minds Logo"></img>
        <h2 className='copyright-text'>copyright 2021</h2>
      </div >
      <form class='sing-in-form'
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <h3 class='sign-in-header-text'>Sign-In</h3>
        <label class='sign-in-label-and-input-div'>
          <div class='input-text-title'>Username</div>
          <input
            class='user-input-box'
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label class='sign-in-label-and-input-div'>
          <div class='input-text-title'>Password</div>
          <input
            class='user-input-box'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button class='sign-in-button'>Sign In</button>
      </form>
      <div class='link-to-sign-up-div'>
        <h1 class="new-to-site-text">New to Meta Minds?</h1>
        <Link to='/sign-up'><button class='link-to-sign-up-button'>Sign Up</button></Link>
      </div>
    </div>
  );
}

export default SignIn;
