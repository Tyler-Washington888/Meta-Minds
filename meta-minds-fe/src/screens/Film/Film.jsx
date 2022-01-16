import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import "./Film.css";
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
      <img className="film-banner-image" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637123958/Meta-Minds/ready_player_one_eol12i.jpg" alt="banner-image"></img>
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
      <div className='film-mobile'>
        <div className='film-mobile-outer-div'>
          {allPosts.map(post => {
            return (
              <Link to={`/view-post/${post.id}`} key={post.id} className="film-mobile-inner-div-link"><div className="film-mobile-inner-div" key={post.id}>
                <div className='film-posts-date-and-title'>
                  <div className='film-mobile-date'>{DateTime.fromISO(`${post?.created_at}`).toLocaleString(DateTime.DATE_MED)}</div>
                  <div className='film-mobile-title'>{post.title}</div>
                </div>
                <img className='film-mobile-image' src={post.image} alt={post.tile} />
              </div></Link>
            )
          })}
        </div>
        <Footer />
      </div>
      <div className='badscreen'>
        <div className="modal-page"></div>
        <div className="modal-div">
          <div className="modal-title-div">
            <div className="modal-title-text-warning" >We're Sorry</div>
            <div className="modal-title-text">Meta Minds is not yet compatible with this screen size</div>
            <div className="modal-title-text-view-read-me">View Readme for more details</div>
          </div>
          <div className="modal-decision-divs">
            <a className="modal-cancel-buttons" href="https://github.com/Tyler-Washington888/Meta-Minds">Readme</a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Film;