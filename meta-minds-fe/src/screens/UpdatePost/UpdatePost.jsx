import { useState, useEffect } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { getPost, updatePost, deletePost } from '../../services/Posts.js';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Footer from '../../components/Footer/Footer';
import "./UpdatePost.css";
import { config } from './editorConfig'
import "./CkeditorTwo.css";


function UpdatePost(props) {
  const { setRefresh } = props;
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [content, setContent] = useState('')
  const { post_id } = useParams();
  const history = useHistory();
  const [isUpdated, setUpdated] = useState(false);


  ClassicEditor.defaultConfig = config

  useEffect(() => {
    const fetchPost = async () => {
      const formData = await getPost(post_id);
      setImage(formData.image);
      setCategory(formData.category);
      setTitle(formData.title);
      setSubtitle(formData.subtitle);
      setContent(formData.content);
    };
    fetchPost();
  }, [post_id]);



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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updatePost(post_id, {
      image: image,
      category: category,
      title: title,
      subtitle: subtitle,
      content: content,
    })
    setRefresh(prevState => !prevState)
    setUpdated(updated);
  };


  if (isUpdated) {
    return <Redirect to={`/view-post/${post_id}`} />;
  }

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
    console.log(file.secure_url)
    if (file.secure_url == undefined) {
      setImage('');
    } else {
      setImage(file.secure_url);
    }
    setLoading(false);
  }
  return (
    <div>
      <img class="update-post-image" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1638051076/Meta-Minds/decentraland_naqec7.jpg" alt="Create-Post-Banner-Image"></img>
      {image !== "" ? (<img className="update-post-close-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1639678942/Meta-Minds/icons8-remove-image-30_1_zythir.png" alt="close-icon" onClick={() => setImage('')}></img>) : (<div></div>)}
      <div class="update-post-page">
        <form
          onSubmit={handleSubmit}
        >
          <h1 class="update-post-header-text">Update Post</h1>
          <div className="update-details-top-div">
            <div className="update-details-top-left">
              <label class="update-post-label-and-input-div update-category-div">
                <div class="update-post-input-text"></div>
                {category === "Mana" ? (<select name="category" className="update-category" onChange={handleChange}>
                  <option value="Mana" selected="selected">{category}</option>
                  <option value="Meta">Meta</option>
                  <option value="Crypto">Crypto</option>
                  <option value="Film">Film</option>
                </select>) : (category === "Meta" ? (<select name="category" className="update-category" onChange={handleChange}>
                  <option value="Meta" selected="selected">{category}</option>
                  <option value="Mana">Mana</option>
                  <option value="Crypto">Crypto</option>
                  <option value="Film">Film</option>
                </select>) : (category === "Crypto" ? (<select name="category" className="update-category" onChange={handleChange}>
                  <option value="Crypto" selected="selected">{category}</option>
                  <option value="Meta">Meta</option>
                  <option value="Mana">Mana</option>
                  <option value="Film">Film</option>
                </select>) : (<select name="category" className="update-category" onChange={handleChange}>
                  <option value="Film" selected="selected">{category}</option>
                  <option value="Meta">Meta</option>
                  <option value="Mana">Mana</option>
                  <option value="Crypto">Crypto</option>
                </select>)))}
              </label>
              <br />
              <label class="update-post-label-and-input-div title-div">
                <div class="update-post-input-text"></div>
                <input
                  class="update-post-user-input-box"
                  type='text'
                  placeholder="Title"
                  value={title}
                  name={'title'}
                  onChange={handleChange} />
              </label>
              <br />
              <label class="update-post-label-and-input-div subtitle-div">
                <div class="update-post-input-text"></div>
                <input
                  class="update-post-user-input-box"
                  type='text'
                  value={subtitle}
                  placeholder="Subtitle"
                  name={'subtitle'}
                  onChange={handleChange} />
              </label>
            </div>
            <div className="update-image-upload-div">
              <label class="update-post-label-and-input-div update-image-div">
                <div>
                  {loading ? (
                    <h5 className="update-loading-image-text">Loading Image...</h5>
                  ) : (image === '' ? (
                    <div></div>
                  ) : (<img className="update-uploaded-image" src={image} alt="new-post" />)
                  )}
                </div>
                <label for="file-inputs">
                  {loading && image === '' || image !== '' ? (<div></div>) : (<img className="image-upload-icon-update" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1639674458/Meta-Minds/icons8-add-image-80_dcxfk2.png" />)}
                </label>
                <input
                  id="file-inputs-update"
                  type='file'
                  accept='image/*'
                  onChange={uploadImage}
                />
              </label>
              <br />
            </div>
          </div>
          <br />
          <label class="update-post-label-and-input-div bottom">
            <div class="update-post-input-text"></div>
            <CKEditor
              data={content}
              config={{ placeholder: "Content..." }}
              class="ck-editor"
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData()
                setContent(data)
              }}
            />
          </label>
          {image.length === 0 || category === "" || title.length === 0 || subtitle.length === 0 || content.length === 0 ? (
            <button className="update-button-disabled" disabled='true'>Update</button>) : (
            <button className="update-button">Update</button>
          )}
        </form>
        <Footer />
      </div>
      <div className='update-posts-mobile'>
        {image !== "" ? (<img className="updates-post-close-icon" src="https://res.cloudinary.com/tylerwashington98/image/upload/v1639678942/Meta-Minds/icons8-remove-image-30_1_zythir.png" alt="close-icon" onClick={() => setImage('')}></img>) : (<div className="updates-post-close-icon"></div>)}
        <form class="create-post-form"
          onSubmit={handleSubmit}
        >
          <h1 class="create-post-header-text">Update Post</h1>
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
          <label class="create-post-label-and-input-div category-div">
            <div class="create-post-input-text"></div>
            {category === "Mana" ? (<select name="category" className="category" onChange={handleChange}>
              <option value="Mana" selected="selected">{category}</option>
              <option value="Meta">Meta</option>
              <option value="Crypto">Crypto</option>
              <option value="Film">Film</option>
            </select>) : (category === "Meta" ? (<select name="category" className="category" onChange={handleChange}>
              <option value="Meta" selected="selected">{category}</option>
              <option value="Mana">Mana</option>
              <option value="Crypto">Crypto</option>
              <option value="Film">Film</option>
            </select>) : (category === "Crypto" ? (<select name="category" className="category" onChange={handleChange}>
              <option value="Crypto" selected="selected">{category}</option>
              <option value="Meta">Meta</option>
              <option value="Mana">Mana</option>
              <option value="Film">Film</option>
            </select>) : (<select name="category" className="category" onChange={handleChange}>
              <option value="Film" selected="selected">{category}</option>
              <option value="Meta">Meta</option>
              <option value="Mana">Mana</option>
              <option value="Crypto">Crypto</option>
            </select>)))}
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
          <label class="create-post-label-and-input-div bottom">
            <div class="create-post-input-text"></div>
            <CKEditor
              data={content}
              config={{ placeholder: "Content..." }}
              class="ck-editor"
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData()
                setContent(data)
              }}
            />
          </label>
          {image.length === 0 || category === "" || title.length === 0 || subtitle.length === 0 || content.length === 0 ? (
            <button className="submit-button-disabled" disabled='true'>Update</button>) : (
            <button className="submit-button">Update</button>
          )}
        </form>
        <Footer />
      </div>
    </div >
  );


}


export default UpdatePost;
