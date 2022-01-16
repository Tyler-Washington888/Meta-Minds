import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import "./Crypto.css";
import { Link } from "react-router-dom";

function Crypto(props) {
  const { posts } = props;
  const [allPosts, setAllPosts] = useState([]);
  const { DateTime } = require("luxon");


  useEffect(async () => {
    const metaPosts = await posts.filter((post) => {
      return post.category === 'Crypto'
    });
    const latestPosts = await metaPosts.sort((b, a) => {
      return a.id - b.id
    });
    setAllPosts(latestPosts);
  }, [posts])

  return (
    <div>
      <img className="crypto-banner-image" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637134484/Meta-Minds/axie_infinity_z8nqbw.jpg" alt="crypto-banner-image"></img>
      <div className="crypto-all-posts-div">
        <div className="crypto-all-posts-outer-div">
          {allPosts.map(post => {
            return (
              <Link to={`/view-post/${post.id}`} key={post.id} className="crypto-all-posts-inner-div-link"><div className="crypto-all-posts-inner-div" key={post.id}>
                <div className="crypto-all-posts-date-and-title-div">
                  <h6 className="crypto-all-posts-date">{DateTime.fromISO(`${post?.created_at}`).toLocaleString(DateTime.DATE_MED)}</h6>
                  <h4 className="crypto-all-posts-title">{post.title}</h4>
                </div>
                <img className="crypto-all-posts-image" src={post.image} alt={post.tile} />
              </div></Link>
            )
          })}
        </div>
        <Footer />
      </div>
      <div className='crypto-mobile'>
        <div className='crypto-mobile-outer-div'>
          {allPosts.map(post => {
            return (
              <Link to={`/view-post/${post.id}`} key={post.id} className="crypto-mobile-inner-div-link"><div className="crypto-mobile-inner-div" key={post.id}>
                <div className='crypto-posts-date-and-title'>
                  <div className='crypto-mobile-date'>{DateTime.fromISO(`${post?.created_at}`).toLocaleString(DateTime.DATE_MED)}</div>
                  <div className='crypto-mobile-title'>{post.title}</div>
                </div>
                <img className='crypto-mobile-image' src={post.image} alt={post.tile} />
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

export default Crypto;