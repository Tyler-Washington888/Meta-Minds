import api from "./Api_config"

export const getAllComments = async () => {
  const res = await api.get('/comments');
  return res.data;
};

export const getOneComment = async (id) => {
  const res = await api.get(`/comments/${id}`);
  return res.data;
};

export const postComment = async (input, id, user) => {
  const res = await api.post('/comments', { content: input, post_id: id, user_id: user });
  return res.data;
};

export const putComment = async (id, commentData) => {
  const res = await api.put(`/comments/${id}`, { comment: commentData });
  return res.data;
};

export const deleteComment = async (id) => {
  const res = await api.delete(`/comments/${id}`);
  return res;
};


