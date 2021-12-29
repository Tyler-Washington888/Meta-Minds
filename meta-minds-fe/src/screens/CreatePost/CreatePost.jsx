import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { createPost } from '../../services/Posts.js'
import { useHistory } from 'react-router';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Footer from '../../components/Footer/Footer';
import "./Ckeditor.css";
import "./Createpost.css";
import { config } from './editorConfig'

function CreatePosts(props) {
  const { currentUser, setRefresh } = props;
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [content, setContent] = useState('')
  const [isUpdated, setUpdated] = useState(false);

  ClassicEditor.defaultConfig = config

  const handleChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
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

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "tydye33");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/tylerwashington98/image/upload",
      {
        method: "Post",
        body: data,
      }
    )
    const file = await res.json();
    if (file.secure_url == undefined) {
      setImage('');
    } else {
      setImage(file.secure_url);
    }
    setLoading(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await createPost({
      image: image,
      category: category,
      title: title,
      subtitle: subtitle,
      content: content
    })
    setRefresh(prevState => !prevState)
    setUpdated(updated);
  };
  if (isUpdated) {
    return <Redirect to={`/explore`} />;
  }

  return (
    <div>
      <img class="create-post-image" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638051076/Meta-Minds/decentraland_naqec7.jpg" alt="Create-Post-Banner-Image"></img>
      <div class="create-post-page">
        <form class="create-post-form"
          onSubmit={handleSubmit}
        >
          <h1 class="create-post-header-text">Create Post</h1>
          <div className="post-details-top-div">
            <div className="post-details-top-left">
              <label class="create-post-label-and-input-div category-div">
                <div class="create-post-input-text"></div>
                <select name="category" className="category" onChange={handleChange}>
                  <option value="">Category</option>
                  <option value="Meta">Meta</option>
                  <option value="Mana">Mana</option>
                  <option value="Crypto">Crypto</option>
                  <option value="Film">Film</option>
                </select>
              </label>
              <br />
              <label class="create-post-label-and-input-div">
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
              <label class="create-post-label-and-input-div ">
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
            <div className="image-upload-div">
              <label class="create-post-label-and-input-div image-div">
                <div>
                  {loading ? (
                    <h5 className="update-loading-image-text">Loading Image...</h5>
                  ) : (image === '' ? (
                    <div></div>
                  ) : (<img className="uploaded-image" src={image} alt="new-post" />)
                  )}
                </div>
                <label for="file-inputs">
                  {loading && image === '' || image !== '' ? (<div></div>) : (<img className="image-upload-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1639674458/Meta-Minds/icons8-add-image-80_dcxfk2.png" />)}
                </label>
                <input
                  id="file-inputs"
                  type='file'
                  accept='image/*'
                  onChange={uploadImage}
                />
              </label>
              <br />
            </div>
          </div>
          <br />
          <label class="create-post-label-and-input-div bottom">
            <div class="create-post-input-text"></div>
            <CKEditor
              config={{ placeholder: "Content...", }}
              class="ck-editor"
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData()
                setContent(data)
              }}
            />
          </label>
          {image.length === 0 || category === "" || title.length === 0 || subtitle.length === 0 || content.length === 0 ? (
            <button className="submit-button-disabled" disabled='true'>Submit</button>) : (
            <button className="submit-button">Submit</button>
          )}
          {image !== "" ? (<img className="create-post-close-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1639678942/Meta-Minds/icons8-remove-image-30_1_zythir.png" alt="close-icon" onClick={() => setImage('')}></img>) : (<div></div>)}
        </form>
        <Footer />
      </div>
    </div >
  );
}

export default CreatePosts;
