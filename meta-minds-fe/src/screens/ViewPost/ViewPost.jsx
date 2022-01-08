import Footer from '../../components/Footer/Footer';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory, Redirect } from 'react-router-dom'
import { getPost, deletePost } from '../../services/Posts';
import { getUsers } from "../../services/Users";
import ReactHtmlParser from 'react-html-parser';
import "./ViewPost.css";



export default function ViewPost(props) {
  const { posts, setRefresh, currentUser } = props;
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [finalDetete, setFinalDelete] = useState(false);
  const [copied, setCopied] = useState(false);
  const history = useHistory();
  const { DateTime } = require("luxon");
  const { post_id } = useParams();

  useEffect(async () => {
    const fetchPost = async () => {
      const res = await getPost(post_id);
      setPost(res);
    };
    fetchPost();
  }, [post_id]);

  const currentPost = posts.filter((current) => {
    return current.id == post_id
  })

  useEffect(async () => {
    const fetchUser = async () => {
      const res = await getUsers();
      const author = await res.filter((user) => {
        return user.id === post.user_id
      })
      setUser(author);
    }
    fetchUser();
  }, [post]);

  const similarPosts = posts.filter((eachPost) => {
    return eachPost.category === post.category && eachPost.id !== post.id;
  })
  const newestSimPosts = similarPosts.sort((b, a) => {
    return a.id - b.id;
  })
  const firstTwoPosts = newestSimPosts.slice(0, 3)

  const handleDelete = async (event) => {
    event.preventDefault()
    const updated = await deletePost(post_id);
    setRefresh(prevState => !prevState)
    history.push(`/user-posts/${currentUser?.id}`)
  };

  function copy() {
    setIsOpen(!isOpen)
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  };
  return (
    <div>
      <img className="view-post-image" src={currentPost[0]?.image} alt="banner-mage"></img>
      <div className="view-post-full-details-div">
        <div className="view-post-upper-details-div" >
          <div className="view-post-upper-details-div-left">
            <div className="view-post-created-at-and-category">
              <div className="view-post-created-at">{DateTime.fromISO(`${post?.created_at}`).toLocaleString(DateTime.DATE_MED)}</div>
              <Link to={`/${post?.category}`} className="single-post-category-link"><div className="view-post-category">{post?.category}</div></Link>
            </div>
            <div className="view-post-title">{post?.title}</div>
            <div className="view-post-subtitle">{post?.subtitle}</div>
            <div className="view-post-option-and-name-div-mobile">
              <div className="view-post-created-name-mobile">{user[0]?.username}</div>
              <div className='options-and-drop-down-mobile-div'>
                <img className="view-post-edit-or-delete-option-mobile" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638566267/option_nqo2as.png" onClick={() => setIsOpen(!isOpen)} alt="banner-mage"></img>
                {isOpen && (
                  (currentUser && currentUser.id === post.user_id ? (
                    <div className="view-post-show-options-dropdown-mobile">
                      <Link className="edit-post-div-link" to={`/update-post/${post?.id}`} key={post?.id}><div className="edit-post-div">
                        <img className="edit-post-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638767523/Meta-Minds/icons8-edit-30_c4n4wb.png"></img>
                        <div className="edit-post-text">Edit Post</div>
                      </div></Link>
                      <div onClick={() => setFinalDelete(!finalDetete)} className="delete-post-div">
                        <img className="delete-post-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638767542/Meta-Minds/icons8-delete-48_ujlv7r.png" ></img>
                        <div className="delete-post-text">Delete Post</div>
                      </div>
                      <div onClick={copy} className="copy-post-url-div">
                        <img className="copy-link-icon-one" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638893598/Meta-Minds/icons8-link-50_jaqddt.png" ></img>
                        <div className="copy-link-text">Copy Post</div>
                      </div>
                    </div>) : (
                    <div onClick={copy} className="view-post-show-options-dropdown-two">
                      <div className="copy-post-url-div-two">
                        <img className="copy-link-icon-two" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638893598/Meta-Minds/icons8-link-50_jaqddt.png" ></img>
                        <div className="copy-link-text-two">Copy Post</div>
                      </div>
                    </div>
                  )))}
              </div>
            </div>
          </div>
          <div className="view-post-option-and-name-div">
            <img className="view-post-edit-or-delete-option" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638566267/option_nqo2as.png" onClick={() => setIsOpen(!isOpen)} alt="banner-mage"></img>
            <div className="view-post-created-name">{user[0]?.username}</div>
          </div>
          {isOpen && (
            (currentUser && currentUser.id === post.user_id ? (
              <div className="view-post-show-options-dropdown">
                <Link className="edit-post-div-link" to={`/update-post/${post?.id}`} key={post?.id}><div className="edit-post-div">
                  <img className="edit-post-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638767523/Meta-Minds/icons8-edit-30_c4n4wb.png"></img>
                  <div className="edit-post-text">Edit Post</div>
                </div></Link>
                <div onClick={() => setFinalDelete(!finalDetete)} className="delete-post-div">
                  <img className="delete-post-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638767542/Meta-Minds/icons8-delete-48_ujlv7r.png" ></img>
                  <div className="delete-post-text">Delete Post</div>
                </div>
                <div onClick={copy} className="copy-post-url-div">
                  <img className="copy-link-icon-one" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638893598/Meta-Minds/icons8-link-50_jaqddt.png" ></img>
                  <div className="copy-link-text">Copy Post</div>
                </div>
              </div>) : (
              <div onClick={copy} className="view-post-show-options-dropdown-two">
                <div className="copy-post-url-div-two">
                  <img className="copy-link-icon-two" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638893598/Meta-Minds/icons8-link-50_jaqddt.png" ></img>
                  <div className="copy-link-text-two">Copy Post</div>
                </div>
              </div>
            )))}
          {copied && (
            <div className="clipboard-div">
              <img className="task-complete-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638902968/Meta-Minds/icons8-task-completed-48_tteo9y.png"></img>
              <div className="Link-to-text">Link copied to clipboard</div>
              <a className="href-text" href={`/view-post/${post.id}`}>View Post</a>
              <img onClick={() => setCopied(false)} className="exit-clipboard-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1637356989/Meta-Minds/icons8-xbox-x-30_b6ugfl.png"></img>
            </div>
          )}
          {finalDetete && (
            <div>
              <div className="modal-page"></div>
              <div className="modal-div">
                <div className="modal-title-div">
                  <div className="modal-title-text-warning" >**WARNING**</div>
                  <div className="modal-title-text">Are You Sure You Want To Delete This Post?</div>
                </div>
                <div className="modal-decision-div">
                  <button onClick={() => setFinalDelete(!finalDetete)} className="modal-cancel-button">Cancel</button>
                  <button onClick={handleDelete} className="modal-delete-button">Delete</button>
                </div>
              </div>
            </div>
          )
          }
        </div>
        <p className="view-post-content">{ReactHtmlParser(post?.content)}</p>
        <div className="similar-posts-div">
          <div className="similar-posts-title">Similar Posts</div>
          <div className="each-similar-post-div">
            {firstTwoPosts.map((simPost) => {
              return (
                <div className="each-similar-post">
                  <Link to={`/view-post/${simPost?.id}`} key={simPost?.id} className="single-post-title-link"><img className="each-similar-post-image" src={simPost?.image} alt="similar-post"></img></Link>
                  <div className="each-similar-post-details-div">
                    <div className="each-similar-post-details-div-text">
                      <div className="each-similar-post-cretated-at-and-category-div">
                        <h5 className="each-similar-post-cretated-at-text">{DateTime.fromISO(`${simPost?.created_at}`).toLocaleString(DateTime.DATE_MED)}</h5>
                        <Link to={`/${simPost?.category}`} className="single-post-category-link"><div className="each-similar-post-catgeory-text">{simPost?.category}</div></Link>
                      </div>
                      <Link to={`/view-post/${simPost?.id}`} key={simPost?.id} className="single-post-title-link"><h1 className="each-similar-post-title">{simPost?.title}</h1></Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='sim-posts-mobile-div'>
            {firstTwoPosts.map((simPost) => {
              return (
                <div className='vp-each-single-mobile-post'>
                  <Link to={`/view-post/${simPost.id}`} key={simPost.id} className="vp-each-single-mobile-post-image-link"><img className="vp-each-single-mobile-post-image" src={simPost.image} alt={simPost.title} /></Link>
                  <div className='vp-each-single-mobile-post-details-div'>
                    <div className='vp-each-single-mobile-post-details-date-and-category-div'>
                      <div className='vp-each-single-mobile-post-details-date'>{DateTime.fromISO(`${simPost?.created_at}`).toLocaleString(DateTime.DATE_MED)}</div>
                      <Link to={`/${simPost.category}`} className="vp-single-post-category-link"> <div className='vp-each-single-mobile-post-details-category'>{simPost.category}</div></Link>
                    </div>
                    <Link to={`/view-post/${simPost.id}`} className='vp-each-single-mobile-post-details-title vp-single-post-category-link'>{simPost.title}</Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div >
  )
}
