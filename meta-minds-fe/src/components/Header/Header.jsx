import React from 'react'
import "./Header.css"
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';



function Header(props) {
  const { currentUser, handleLogout, posts } = props
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  let newFilter = [];

  const handleFilter = (event) => {
    const searchTitle = event.target.value
    setWordEntered(searchTitle)
    const newFilter = posts.reverse().filter((post) => {
      return post.title.toLowerCase().includes(searchTitle.toLowerCase())

    });
    console.log(newFilter);
    if (searchTitle === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter)
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("")
  }
  return (
    <div className="header-div">
      <div className="header-div-content-margin-left">
        <NavLink to='/explore' className='header-div-app-title'>Meta Minds</NavLink>
        <div className='header-div-categories'>
          <NavLink to='/explore' activeStyle={{
            borderBottom: "4px ridge white",
          }} className='header-div-catergories-text meta'>Latest</NavLink>
          <NavLink to='/meta' activeStyle={{
            borderBottom: "4px ridge white",
          }} className='header-div-catergories-text meta'>Meta</NavLink>
          <NavLink to='/mana' activeStyle={{
            borderBottom: "4px ridge white",
          }} className='header-div-catergories-text meta'>Mana</NavLink>
          <NavLink to='/crypto' activeStyle={{
            borderBottom: "4px ridge white",
          }} className='header-div-catergories-text meta'>Crypto</NavLink>
          <NavLink to='/conspiracy' activeStyle={{
            borderBottom: "4px ridge white",
          }} className='header-div-catergories-text meta'>Film</NavLink>
        </div>
      </div>
      <div className='header-div-content-margin-right'>
        <div className='header-div-search-bar-div'>
          <div class='search-bar-div-search'>
            {wordEntered.length === 0 ? (
              <img class='search-icon' src='https://res.cloudinary.com/tylerwashington98/image/upload/v1637339580/Meta-Minds/icons8-search-24_mqt63w.png'></img>)
              : (
                <div class="yoodiv">
                  <img class='searchs-icon' src='https://res.cloudinary.com/tylerwashington98/image/upload/v1637339580/Meta-Minds/icons8-search-24_mqt63w.png'></img>
                  <img class='closbtn' src='https://res.cloudinary.com/tylerwashington98/image/upload/v1637356989/Meta-Minds/icons8-xbox-x-30_b6ugfl.png' onClick={clearInput} ></img>
                </div>
              )
            }
            {wordEntered == "" ? (
              <input
                class='header-div-search-bar'
                type='text'
                value={wordEntered}
                placeholder='Search'
                onChange={handleFilter}
              />) : (
              <input
                class='header-div-search-bars'
                type='text'
                value={wordEntered}
                placeholder='Search'
                onChange={handleFilter}
              />
            )}
          </div>
          {filteredData.length != 0 && newFilter != [] ? (
            <div class='Resultss'>
              {filteredData.slice(0, 15).map((data) => {
                return (
                  <div class='rolie'>
                    <img class="latest-post-images" src={data.image} alt={data.title}></img>
                    <div>
                      <div class="titles">{data.title}</div>
                      <div class="subtitles">{data.subtitle}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (wordEntered.length > 0 && newFilter.length == 0 ? (
            <div class='RESULT'>
              <div class='SRH'>
                <img class='searchs-iconsssss' src='https://res.cloudinary.com/tylerwashington98/image/upload/v1637339580/Meta-Minds/icons8-search-24_mqt63w.png'></img>
                <h2 class="sorry">Sorry, we couldn't find any matches</h2>
                <h3 class="try">Try searching for a different keyword</h3>
              </div>
            </div>
          ) : (
            <div></div>
          ))}
        </div>
      </div>
      {currentUser && wordEntered.length == 0 ? (
        <div className='header-div-user'>
          <p className='header-div-user-welcome'>Welcome, {currentUser.username}</p>
          <div className='header-div-your-posts-and-logout-div'>
            <div><Link className='header-div-your-posts' to={`/user-posts/${currentUser?.id}`}>Your Posts</Link></div>
            <div className='header-div-logout' onClick={handleLogout}>Logout</div>
          </div>
        </div>
      ) : (!currentUser && wordEntered.length == 0 ? (
        <div className="header-div-non-user">
          <Link className='header-div-sign-in' to='/sign-in'><div>Sign In</div></Link>
          <Link className='header-div-sign-up' to='/sign-up'><div>Sign Up</div></Link>
        </div>) : (
        <div></div>
      )
      )
      }
    </div >
  )
}
export default Header;

