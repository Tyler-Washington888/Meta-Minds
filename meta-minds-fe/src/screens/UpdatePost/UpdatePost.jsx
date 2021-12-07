import { useState, useEffect } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { getPost, updatePost, deletePost } from '../../services/Posts.js';

function UpdatePost(props) {
  const [formData, setFormData] = useState({
    image: '',
    category: '',
    title: '',
    subtitle: '',
    content: '',
  });
  const { image, category, title, subtitle, content } = formData;
  const { post_id } = useParams();
  const history = useHistory();
  const [isUpdated, setUpdated] = useState(false);


  useEffect(() => {
    const fetchPost = async () => {
      const formData = await getPost(post_id);
      setFormData(formData);
    };
    fetchPost();
  }, [post_id]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updatePost(post_id, formData);
    setUpdated(updated);
  };
  if (isUpdated) {
    return <Redirect to={`/explore`} />;
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    const updated = await deletePost(post_id);
    history.push(`/explore`)
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        <h1>Update Post</h1>
        <label>
          Image URL:
          <input type='text' value={image} name={'image'} onChange={handleChange} />
        </label>
        <br />
        <label>
          Category:
          <input type='text' value={category} name={'category'} onChange={handleChange} />
        </label>
        <br />
        <label>
          Title:
          <input type='text' value={title} name={'title'} onChange={handleChange} />
        </label>
        <br />
        <label>
          Subtile:
          <input type='text' value={subtitle} name={'subtitle'} onChange={handleChange} />
        </label>
        <br />
        <label>
          Content:
          <input type='text' value={content} name={'content'} onChange={handleChange} />
        </label>
        <br />
        <button>Submit</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </>
  );


}

export default UpdatePost;

