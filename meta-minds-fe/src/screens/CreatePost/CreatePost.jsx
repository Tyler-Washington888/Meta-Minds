import "./Createpost.css";
import { useState } from 'react';
import { createPost } from '../../services/Posts.js'
import { useHistory } from 'react-router';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


function CreatePosts(props) {
  const { currentUser } = props;
  const history = useHistory()
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [content, setContent] = useState('')

  const handleChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case 'image':
        setImage(value)
        break
      case 'category':
        setCategory(value)
        break
      case 'title':
        setTitle(value)
        break
      case "subtitle":
        setSubtitle(value)
        break
    }
  };

  return (
    <div>
      <img class="explore-image" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638051076/Meta-Minds/decentraland_naqec7.jpg" alt="banner image"></img>
      <div class="latest-and-all-posts-main-divs">
        <form class="create-post-form"
          onSubmit={(e) => {
            e.preventDefault();
            createPost({
              image: image,
              category: category,
              title: title,
              subtitle: subtitle,
              content: content
            });
            history.push(`/user-posts/${currentUser?.id}`)
          }}
        >  <h1 class="create-post-header-text">Create Post</h1>
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
            <div className="edits">
              <CKEditor
                editor={ClassicEditor}
                onChange={(event, editor) => {
                  const data = editor.getData()
                  setContent(data)
                }}
              />
            </div>
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div >
  );
}

export default CreatePosts;
