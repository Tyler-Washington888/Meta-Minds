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
    <div className="sign-up-div">
      <div className='sign-up-outer-div-desktop'>
        <div className="meta-minds-logo-div">
          <img className="meta-minds-logo" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta Minds Logo"></img>
          <h2 className='sign-up-copyright-text'>copyright 2022</h2>
        </div >
        <form className='sign-up-form'
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(formData);
          }}
        >
          <div className='sign-up-header-text'>Sign-Up</div>
          <label className='sign-up-label-and-input-div'>
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
          <label className='sign-up-label-and-input'>
            <div className='input-text-title'>Email</div>
            <input
              className='user-input-box'
              type='text'
              name='email'
              value={email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className='sign-up-label-and-input' >
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
          <button className='sign-up-button'>Sign-Up</button>
        </form>
        <div className='link-to-sign-in-div'>
          <h1 className='have-account-text'>Have an Account?</h1>
          <Link to='/sign-in'><button className='link-to-sign-in-button'>Sign-In</button></Link>
        </div>
      </div>


      <div className='sign-up-outer-div-mobile'>
        <div className="meta-minds-logo-div-sign-up-mobile">
          <img className="meta-minds-logo-sign-up" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1636143053/Meta-Minds/2d4b6fe46ee740998e2e0f51bbbd3496_esrod4.png" alt="Meta Minds Logo"></img>
          <h2 className='sign-up-copyright-text'>copyright 2022</h2>
        </div >
        <form className='sign-up-form-mobile'
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(formData);
          }}
        >
          <div className='sign-up-header-text-mobile'>Sign-Up</div>
          <label className='sign-up-label-and-input-div'>
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
          <label className='sign-up-label-and-input'>
            <div className='input-text-title'>Email</div>
            <input
              className='user-input-box'
              type='text'
              name='email'
              value={email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className='sign-up-label-and-input' >
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
          <button className='sign-up-button'>Sign-Up</button>
        </form>
        <div className='link-to-sign-in-div'>
          <h1 className='have-account-text'>Have an Account?</h1>
          <Link to='/sign-in'><button className='link-to-sign-in-button'>Sign-In</button></Link>
        </div>
      </div>
    </div>
  );
}
