import { identity } from 'lodash';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getComments } from '../../Services/Comments';

export default function ViewPost(props) {
  const { post_id } = useParams()
  const [singlePost, setSinglePost] = useState(null);
  const [comments, setComments] = useState(null);


  useEffect(() => {
    const fecthComments = async () => {
      const response = await getComments();
      const specComment = response.filter((comment) => comment.post_id == post_id)
      setComments(specComment)
    }
    fecthComments()
  }, [post_id])


  return (
    <div>
      {comments.map(comment => (
        <p>{comment.content}</p>
      ))}
    </div>
  )
}
