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
                  <h6 className="crypto-all-posts-date">{DateTime.now(post.created_at).toLocaleString(DateTime.DATE_MED)}</h6>
                  <h4 className="crypto-all-posts-title">{post.title}</h4>
                </div>
                <img className="crypto-all-posts-image" src={post.image} alt={post.tile} />
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