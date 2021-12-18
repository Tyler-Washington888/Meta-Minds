import api from "./Api_config"

export const createPost = async (input) => {
  try {
    const res = await api.post(`/posts`, { post: input });
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const createComment = async (input) => {
  try {
    const res = await api.post(`/comments`, { comment: input });
    return res.data;
  } catch (e) {
    throw e;
  }
};


export const getComments = async () => {
  try {
    const res = await api.get(`/comments`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

