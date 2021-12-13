import { useState } from 'react';
import { createPost } from '../../services/Posts.js'
import { useHistory } from 'react-router';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Footer from '../../components/Footer/Footer';
import "./Styles.css";
import "./Createpost.css";
import { config } from './editorConfig'



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

  const config = {
    placeholder: 'Type some text...'
  };
  return (
    <div >
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

          <div className="inputs">
            <div className="Title yoo">
              <label class="create-post-label-and-input-div image huh yo">
                <div class="create-post-input-text"></div>
                <input
                  class="create-post-user-input-box"
                  type='text'
                  placeholder="Image URL"
                  name={'image'}
                  value={image}
                  onChange={handleChange} />
              </label>
              <br />
              <label class="create-post-label-and-input-div images huh bruh">
                <div class="create-post-input-text"></div>
                <select name="category" className="category" onChange={handleChange}>
                  <option value="">Category</option>
                  <option value="Meta">Meta</option>
                  <option value="Mana">Mana</option>
                  <option value="Crypto">Crypto</option>
                  <option value="Film">Film</option>
                </select>
              </label>
            </div>
            <br />
            <div className="Title">
              <label class="create-post-label-and-input-div image">
                <div class="create-post-input-text"></div>
                <input
                  class="create-post-user-input-box"
                  type='text'
                  placeholder="Title"
                  value={title}
                  name={'title'}
                  onChange={handleChange} />
              </label>
              <br />
              <label class="create-post-label-and-input-div images">
                <div class="create-post-input-text"></div>
                <input
                  class="create-post-user-input-box"
                  type='text'
                  value={subtitle}
                  placeholder="Subtitle"
                  name={'subtitle'}
                  onChange={handleChange} />
              </label>
            </div>
          </div>
          <br />
          <label class="create-post-label-and-input-div bottom">
            <div class="create-post-input-text"></div>
            <CKEditor
              config={{ placeholder: "Content..." }}
              class="ck-editor"
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData()
                setContent(data)
              }}
            />
          </label>
          <button className="submit-button">Submit</button>
        </form>
        <Footer />
      </div>
    </div >
  );
}

export default CreatePosts;
