import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import "./Film.css";
import FilmImage from "/Users/tylerwashington/new-work/Meta-Minds/meta-minds-fe/src/assets/images/FilmImage.jpg"
import { Link } from "react-router-dom";

function Film(props) {
  const { posts } = props;
  const [allPosts, setAllPosts] = useState([]);
  const { DateTime } = require("luxon");


  useEffect(async () => {
    const metaPosts = await posts.filter((post) => {
      return post.category === 'Film'
    });
    const latestPosts = await metaPosts.sort((b, a) => {
      return a.id - b.id
    });
    setAllPosts(latestPosts);
  }, [posts])

  return (
    <div>
      <img className="film-banner-image" src={FilmImage} alt="banner-image"></img>
      <div className="film-posts-div">
        <div className="each-post-outer-div">
          {allPosts.map(post => {
            return (
              <Link to={`/view-post/${post.id}`} key={post.id} className="each-post-inner-div-link"><div className="each-post-inner-div" key={post.id}>
                <div className="each-post-date-and-title-div">
                  <h6 className="each-post-date">{DateTime.fromISO(`${post?.created_at}`).toLocaleString(DateTime.DATE_MED)}</h6>
                  <h4 className="each-post-title">{post.title}</h4>
                </div>
                <img className="each-post-image" src={post.image} alt={post.tile} />
              </div></Link>
            )
          })}
        </div>
        <Footer />
      </div>
    </div >
  )
}

export default Film;