import { useState } from 'react';
import { createPost } from '../../Services/Posts'
import { useHistory } from 'react-router';

export default function CreatePosts(props) {
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost(formData);
        history.push(`/user-posts/${currentUser?.id}`)
      }}
    >
      <h1>Create Post</h1>
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
  );
}
