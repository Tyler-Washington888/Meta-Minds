import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import "./SignIn.css";


function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    <div class='blah'>
      <form class='form'
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <div class="met-logo-divssa">
          <img className="met-logossa" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta Minds Logo"></img>
          <h2 className='copyrightssa'>copyright 2021</h2>
        </div >
        <div class='forms'>
          <h3 class='SignIn'>Sign-In</h3>
          <label class='username'>
            <div class='username'>Username</div>
            <input
              class='class-input'
              type='text'
              name='username'
              value={username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label class='username'>
            <div class='username'>Password</div>
            <input
              class='class-input'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button class='sign-in-button'>Sign In</button>
        </div>
        <h1 class="no-account">New to Meta Minds?</h1>
        <Link to='/sign-up' ><button class='sign-in-buttons'>Sign Up</button></Link>
      </form>
    </div>
  );
}

export default SignIn;
