import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import "./Crypto.css";
import CryptoImage from "/Users/tylerwashington/new-work/Meta-Minds/meta-minds-fe/src/assets/images/CryptoImage.jpg"
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
      <img className="crypto-banner-image" src={CryptoImage} alt="crypto-banner-image"></img>
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
    </div >
  )
}

export default Crypto;