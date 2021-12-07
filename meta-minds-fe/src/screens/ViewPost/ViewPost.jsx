import Footer from '../../components/Footer/Footer';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { getPost, deletePost } from '../../services/Posts';
import { getUsers } from "../../services/Users";
import Modal from '../../components/Modal/Modal';

import "./ViewPost.css";


export default function ViewPost(props) {
  const { post_id } = useParams();
  const { posts, currentUser } = props;
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [simPosts, setSimPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [finalDetete, setFinalDelete] = useState(false);
  const history = useHistory();
  const { DateTime } = require("luxon");

  useEffect(async () => {
    const fetchPost = async () => {
      const res = await getPost(post_id);
      setPost(res);
    };
    fetchPost();
  }, [post_id]);

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

  useEffect(async () => {
    const similarPosts = await posts.filter((eachPost) => {
      return eachPost.category === post.category && eachPost.id !== post.id;
    })
    const newestSimPosts = await similarPosts.sort((b, a) => {
      return a.id - b.id;
    })
    const firstTwoPosts = await newestSimPosts.slice(0, 3)
    setSimPosts(firstTwoPosts)
  }, [post_id])



  const handleDelete = async (event) => {
    event.preventDefault()
    const updated = await deletePost(post_id);
    history.push(`/explore`)
  };

  return (
    <div>
      <img className="view-post-image" src={post?.image} alt="banner-mage"></img>
      <div className="view-post-full-details-div">
        <div className="view-post-upper-details-div" >
          <div className="view-post-upper-details-div-left">
            <div className="view-post-created-at-and-category">
              <div className="view-post-created-at">{DateTime.now().toLocaleString(DateTime.DATE_MED)}</div>
              <Link to={`/${post?.category}`} className="single-post-category-link"><div className="view-post-category">{post?.category}</div></Link>
            </div>
            <div className="view-post-title">{post?.title}</div>
            <div className="view-post-subtitle">{post?.subtitle}</div>
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
              </div>) : (
              <div>yo</div>
            )))}
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
        <p className="view-post-content">{post?.content}</p>
        <div className="similar-posts-div">
          <div className="similar-posts-title">Similar Posts</div>
          <div className="each-similar-post-div">
            {simPosts.map((simPost) => {
              return (
                <div className="each-similar-post">
                  <Link to={`/view-post/${simPost?.id}`} key={simPost?.id} className="single-post-title-link"><img className="each-similar-post-image" src={simPost?.image} alt="similar-post"></img></Link>
                  <div className="each-similar-post-details-div">
                    <div className="each-similar-post-details-div-text">
                      <div className="each-similar-post-cretated-at-and-category-div">
                        <h5 className="each-similar-post-cretated-at-text">{DateTime.now().toLocaleString(DateTime.DATE_MED)}</h5>
                        <Link to={`/${simPost.category}`} className="single-post-category-link"><div className="each-similar-post-catgeory-text">{simPost?.category}</div></Link>
                      </div>
                      <Link to={`/view-post/${simPost?.id}`} key={simPost?.id} className="single-post-title-link"><h1 className="each-similar-post-title">{simPost?.title}</h1></Link>
                    </div>
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
