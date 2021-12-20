import { useState } from 'react';
import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div class="sign-up-div">
      <div class="meta-minds-logo-div">
        <img className="meta-minds-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta Minds Logo"></img>
        <h2 className='copyright-text'>copyright 2021</h2>
      </div >
      <form class='sign-up-form'
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}
      >
        <div class='sign-up-header-text'>Sign-Up</div>
        <label class='sign-up-label-and-input-div'>
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
        <label class='sign-up-label-and-input'>
          <div class='input-text-title'>Email</div>
          <input
            class='user-input-box'
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label class='sign-up-label-and-input' >
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
        <button class='sign-up-button'>Sign-Up</button>
      </form>
      <div class='link-to-sign-in-div'>
        <h1 class='have-account-text'>Have an Account?</h1>
        <Link to='/sign-in'><button class='link-to-sign-in-button'>Sign-In</button></Link>
      </div>
    </div>
  );
}
