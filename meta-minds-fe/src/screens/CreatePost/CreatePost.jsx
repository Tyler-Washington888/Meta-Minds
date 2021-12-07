import { useState } from 'react';
import { createPost } from '../../services/Posts.js'
import { useHistory } from 'react-router';
import Footer from '../../components/Footer/Footer';
import "./Createpost.css";

function CreatePosts(props) {
  const [formData, setFormData] = useState({
    image: '',
    category: '',
    title: '',
    subtitle: '',
    content: '',
  });
  const { image, category, title, subtitle, content } = formData;
  const { currentUser } = props;
  const history = useHistory()

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <img class="explore-image" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638051076/Meta-Minds/decentraland_naqec7.jpg" alt="banner image"></img>
      <div class="latest-and-all-posts-main-divs">
        <form class="create-post-form"
          onSubmit={(e) => {
            e.preventDefault();
            createPost(formData);
            history.push(`/user-posts/${currentUser?.id}`)
          }}
        >
          <h1 class="create-post-header-text">Create Post</h1>
          <label class="create-post-label-and-input-div">
            <div class="create-post-input-text">Image URL</div>
            <input
              class="create-post-user-input-box"
              type='text'
              name={'image'}
              value={image}
              onChange={handleChange} />
          </label>
          <br />
          <label class="create-post-label-and-input-div">
            <div class="create-post-input-text">Category</div>
            <input
              class="create-post-user-input-box"
              type='text'
              value={category}
              name={'category'}
              onChange={handleChange} />
          </label>
          <br />
          <label class="create-post-label-and-input-div">
            <div class="create-post-input-text">Title</div>
            <input
              class="create-post-user-input-box"
              type='text'
              value={title}
              name={'title'}
              onChange={handleChange} />
          </label>
          <br />
          <label class="create-post-label-and-input-div">
            <div class="create-post-input-text">Subtitle</div>
            <input
              class="create-post-user-input-box"
              type='text'
              value={subtitle}
              name={'subtitle'}
              onChange={handleChange} />
          </label>
          <br />
          <label class="create-post-label-and-input-div">
            <div class="create-post-input-text">Content</div>
            <input
              class="create-post-user-input-box"
              type='text'
              value={content}
              name={'content'}
              onChange={handleChange} />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePosts;