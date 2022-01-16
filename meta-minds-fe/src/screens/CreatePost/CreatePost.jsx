import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { createPost } from '../../j/Posts.js'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Footer from '../../components/Footer/Footer';
import "./Ckeditor.css";
import "./Createpost.css";
import { config } from './editorConfig'

function CreatePosts(props) {
  const { currentUser, setRefresh } = props;
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
    if (file.secure_url === undefined) {
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
      content: content,
      user_id: currentUser.id
    })
    setRefresh(prevState => !prevState)
    setUpdated(updated);
  };
  if (isUpdated) {
    return <Redirect to={`/`} />;


  }

  return (
    <div>
      {/* desktop version */}
      <img className="create-post-image" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638051076/Meta-Minds/decentraland_naqec7.jpg" alt="Create-Post-Banner"></img>
      <div className="create-post-page">
        {image !== "" ? (<img className="close-icon-mobile-create" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1639678942/Meta-Minds/icons8-remove-image-30_1_zythir.png" alt="close-icon" onClick={() => setImage('')}></img>) : (<div className="close-icon-mobile-create"></div>)}
        <form className="create-post-form"
          onSubmit={handleSubmit}
        >
          <h1 className="create-post-header-text">Create Post</h1>
          <div className="post-details-top-div">
            <div className="post-details-top-left">
              <label className="create-post-label-and-input-div category-div">
                <div className="create-post-input-text"></div>
                <select name="category" className="category" onChange={handleChange}>
                  <option value="">Category</option>
                  <option value="Meta">Meta</option>
                  <option value="Mana">Mana</option>
                  <option value="Crypto">Crypto</option>
                  <option value="Film">Film</option>
                </select>
              </label>
              <br />
              <label className="create-post-label-and-input-div">
                <div className="create-post-input-text"></div>
                <input
                  className="create-post-user-input-box"
                  type='text'
                  placeholder="Title"
                  value={title}
                  name={'title'}
                  onChange={handleChange} />
              </label>
              <br />
              <label className="create-post-label-and-input-div ">
                <div className="create-post-input-text"></div>
                <input
                  className="create-post-user-input-box"
                  type='text'
                  value={subtitle}
                  placeholder="Subtitle"
                  name={'subtitle'}
                  onChange={handleChange} />
              </label>
            </div>
            <div className="image-upload-div">
              <label className="create-post-label-and-input-div image-div">
                <div>
                  {loading ? (
                    <h5 className="update-loading-image-text">Loading Image...</h5>
                  ) : (image === '' ? (
                    <div></div>
                  ) : (<img className="uploaded-image" src={image} alt="new-post" />)
                  )}
                </div>
                <label htmlFor="file-inputs">
                  {((loading && image === '') || image !== '') ? (<div></div>) : (<img className="image-upload-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1639674458/Meta-Minds/icons8-add-image-80_dcxfk2.png" alt="upload-icon" />)}
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
          <label className="create-post-label-and-input-div bottom">
            <div className="create-post-input-text"></div>
            <CKEditor
              config={{ placeholder: "Content...", }}
              className="ck-editor"
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
        </form>
        <Footer />
      </div>
      {/* mobile version */}
      <div className='create-posts-mobile'>
        {image !== "" ? (<img className="close-icon-mobile-create" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1639678942/Meta-Minds/icons8-remove-image-30_1_zythir.png" alt="close-icon" onClick={() => setImage('')}></img>) : (<div className="close-icon-mobile-create"></div>)}
        <form className="create-post-form"
          onSubmit={handleSubmit}
        >
          <h1 className="create-post-header-text">Create Post</h1>
          <label className="create-post-label-and-input-div image-div">
            <div >
              {loading ? (
                <h5 className="update-loading-image-text">Loading Image...</h5>
              ) : (image === '' ? (
                <div></div>
              ) : (<img className="uploaded-image-mobile" src={image} alt="new-post" />)
              )}
            </div>
            <label htmlFor="file-inputs">
              {((loading && image === '') || image !== '') ? (<div></div>) : (<img className="image-upload-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1639674458/Meta-Minds/icons8-add-image-80_dcxfk2.png" alt='upload-icon' />)}
            </label>
            <input
              id="file-inputs"
              type='file'
              accept='image/*'
              onChange={uploadImage}
            />
          </label>
          <br />
          <label className="create-post-label-and-input-div category-div">
            <div className="create-post-input-text"></div>
            <select name="category" className="category" onChange={handleChange}>
              <option value="">Category</option>
              <option value="Meta">Meta</option>
              <option value="Mana">Mana</option>
              <option value="Crypto">Crypto</option>
              <option value="Film">Film</option>
            </select>
          </label>
          <br />
          <label className="create-post-label-and-input-div">
            <div className="create-post-input-text"></div>
            <input
              className="create-post-user-input-box"
              type='text'
              placeholder="Title"
              value={title}
              name={'title'}
              onChange={handleChange} />
          </label>
          <br />
          <label className="create-post-label-and-input-div ">
            <div className="create-post-input-text"></div>
            <input
              className="create-post-user-input-box"
              type='text'
              value={subtitle}
              placeholder="Subtitle"
              name={'subtitle'}
              onChange={handleChange} />
          </label>
          <label className="create-post-label-and-input-div bottom">
            <div className="create-post-input-text"></div>
            <CKEditor
              config={{ placeholder: "Content...", }}
              className="ck-editor"
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData()
                setContent(data)
              }}
            />
          </label>
          {image.length === 0 || category === "" || title.length === 0 || subtitle.length === 0 || content.length === 0 ? (
            <button className="submit-button-disabled" disabled={true}>Submit</button>) : (
            <button className="submit-button">Submit</button>
          )}
        </form>
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
  );
}

export default CreatePosts;
