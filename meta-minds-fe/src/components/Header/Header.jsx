import React from 'react'
import "./Header.css"
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import HamburgerMenu from "/Users/tylerwashington/new-work/Meta-Minds/meta-minds-fe/src/assets/icons/HamburgerMenu.png"
import MetaLogo from "/Users/tylerwashington/new-work/Meta-Minds/meta-minds-fe/src/assets/icons/MetaLogo.png"
import SearchBar from "/Users/tylerwashington/new-work/Meta-Minds/meta-minds-fe/src/assets/icons/SearchBar.png"
import Xbox from "/Users/tylerwashington/new-work/Meta-Minds/meta-minds-fe/src/assets/icons/Xbox.png"

function Header(props) {
  const { currentUser, handleLogout, posts } = props
  const [filteredData, setFilteredData] = useState([]);
  const [filteredDataMobile, setFilteredDataMobile] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [wordsEntered, setWordsEntered] = useState("");
  const [mobileSearch, setMobileSearch] = useState(false)

  let newFilter = [];
  const handleFilter = (event) => {
    const searchTitle = event.target.value
    setWordEntered(searchTitle)

    const newFilter = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchTitle.toLowerCase())
    });
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


  let newFilterMobile = [];

  const handleFilterMobile = (event) => {
    const searchTitleMobile = event.target.value
    setWordsEntered(searchTitleMobile)

    const newFilterMobile = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchTitleMobile.toLowerCase())
    });
    if (searchTitleMobile === "") {
      setFilteredDataMobile([]);
    } else {
      setFilteredDataMobile(newFilterMobile)
    }
  };
  const clearSearch = () => {
    setFilteredDataMobile([]);
    setWordsEntered("")
    setMobileSearch(!mobileSearch)
  }

  return (
    <div className="header-div">
      <div className="header-div-content-margin-left">
        <NavLink to="/" className="header-div-app-title">Meta Minds</NavLink>
        <div className="header-div-categories">

          <NavLink exact to="/" activeStyle={{
            borderBottom: "4px ridge white",
          }} className="header-div-catergories-text link">Latest</NavLink>

          <NavLink to="/meta" activeStyle={{
            borderBottom: "4px ridge white",
          }} className="header-div-catergories-text link">Meta</NavLink>
          <NavLink to="/mana" activeStyle={{
            borderBottom: "4px ridge white",
          }} className="header-div-catergories-text link">Mana</NavLink>
          <NavLink to="/crypto" activeStyle={{
            borderBottom: "4px ridge white",
          }} className="header-div-catergories-text link">Crypto</NavLink>
          <NavLink to="/film" activeStyle={{
            borderBottom: "4px ridge white",
          }} className="header-div-catergories-text link">Film</NavLink>
        </div>
      </div>




      <div className="mobile-content-div">
        <img className="hamburger-menu" src={HamburgerMenu} alt="hamburger-menu"></img>
        <Link className="mobile-logo-div-link" to="/"><div className="mobile-logo-div">
          <img className="meta-logo-person" src={MetaLogo} alt="meta-logo-person"></img>
          <div className="meta-minds-text" alt="meta-minds-text">Meta Minds</div>
        </div></Link>
        {mobileSearch === true ? (
          <div className='mobile-search-div'>
            <div className="mobile-search-top-div">
              <img className="search-bar-icon" src={SearchBar} alt="search-bar-icon"></img>
              <img onClick={clearSearch} className="close-search-bar-icon" src={Xbox} alt="close-search-bar-icon"></img>
              <div className='mobile-search-input-div'></div>
              <input
                className="mobile-search-input"
                type="text"
                value={wordsEntered}
                placeholder="Search"
                onChange={handleFilterMobile}
              />
            </div>
            {wordsEntered == 0 ? (
              <div className="mobile-search-bar-default-result">
                <img className="meta-logo-default-result" src={MetaLogo} alt="meta-logo-default-result"></img>
              </div>) :
              (filteredDataMobile.length != 0 && newFilterMobile != [] ? (
                <div className="mobile-search-bar-successful-result">
                  {filteredDataMobile.slice(0, 15).map((data) => {
                    return (
                      <Link to={`/view-post/${data.id}`} key={data.id} className="single-search-result-div-link" onClick={clearSearch}><div className="single-search-result-div-mobile">
                        <div>
                          <div className="search-result-title">{data.title}</div>
                          <div className="search-result-subtitle">{data.subtitle}</div>
                        </div>
                      </div></Link>
                    )
                  })}
                </div>
              ) : (wordsEntered.length > 0 && newFilterMobile.length === 0 ? (
                <div className="mobile-search-bar-unsuccessful-result">
                  <div className="unsuccessful-search-results-text-divs">
                    <img className="unsuccessful-search-result-icon" src={SearchBar}></img>
                    <h2 className="sorry-text">Sorry, we couldn't find any matches</h2>
                    <h3 className="try-again-text">Try searching for a different keyword</h3>
                  </div>
                </div>
              ) : (
                <div></div>
              )))}
          </div>
        )
          : (<img onClick={() => setMobileSearch(!mobileSearch)} className="search-bar-icon-mobile" src={SearchBar} alt="search-bar-icon-mobile"></img>)}
      </div>
      {
        mobileSearch === true ? (
          <div className="page-overlay-mobile"></div>
        ) : (<div></div>)
      }








      <div></div>
      <div className="header-div-content-margin-right">
        <div className="empty-search-bar-container">
          <div className="empty-search-bar-form">
            {wordEntered.length === 0 ? (
              <img className="empty-search-search-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637339580/Meta-Minds/icons8-search-24_mqt63w.png" alt="search-icon"></img>)
              : (
                <div className="non-empty-search-icon-div">
                  <img className="non-empty-search-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637339580/Meta-Minds/icons8-search-24_mqt63w.png" alt="search-icon"></img>
                  <img className="close-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637356989/Meta-Minds/icons8-xbox-x-30_b6ugfl.png" onClick={clearInput} alt="close-icon"></img>
                </div>
              )
            }
            {wordEntered === "" ? (
              <input
                className="header-div-search-bar-input-empty"
                type="text"
                value=""
                placeholder="Search"
                onChange={handleFilter}
              />) : (
              <input
                className="header-div-search-input-not-empty"
                type="text"
                value={wordEntered}
                placeholder="Search"
                onChange={handleFilter}
              />
            )}
          </div>
          {filteredData.length != 0 && newFilter != [] ? (
            <div className="successful-search-bar-not-empty">
              {filteredData.slice(0, 15).map((data) => {
                return (
                  <Link to={`/view-post/${data.id}`} key={data.id} className="single-search-result-div-link" onClick={clearInput}><div className="single-search-result-div">
                    <img className="search-result-image" src={data.image} alt={data.title}></img>
                    <div>
                      <div className="search-result-title">{data.title}</div>
                      <div className="search-result-subtitle">{data.subtitle}</div>
                    </div>
                  </div></Link>
                )
              })}
            </div>
          ) : (wordEntered.length > 0 && newFilter.length === 0 ? (
            <div className="unsuccessful-search-results">
              <div className="unsuccessful-search-results-text-div">
                <img className="unsuccessful-search-result-icon" src={SearchBar}></img>
                <h2 className="sorry-text">Sorry, we couldn't find any matches</h2>
                <h3 className="try-again-text">Try searching for a different keyword</h3>
              </div>
            </div>
          ) : (
            <div></div>
          ))}
        </div>
      </div>
      {
        currentUser && wordEntered.length == 0 ? (
          <div className="header-div-user">
            <p className="header-div-user-welcome">Welcome, <span className="welcome-text">{currentUser.username}</span></p>
            <div className="header-div-your-posts-and-logout-div">
              <NavLink className="header-div-your-posts" activeStyle={{
                borderBottom: "4px ridge white",
              }} to={`/user-posts/${currentUser?.id}`}>Your Posts</NavLink>
              <Link to="/" className="header-div-logout-link"><div className="header-div-logout" onClick={handleLogout}>Logout</div></Link>
            </div>
          </div>
        ) : (!currentUser && wordEntered.length == 0 ? (
          <div className="header-div-non-user">
            <Link className="header-div-sign-in" to="/sign-in"><div>Sign In</div></Link>
            <Link className="header-div-sign-up" to="/sign-up"><div>Sign Up</div></Link>
          </div>) : (
          <div></div>
        )
        )
      }
      {
        wordEntered.length !== 0 ? (
          <div className="page-overlay"></div>
        ) : (<div></div>)
      }

    </div >
  )
}
export default Header;

