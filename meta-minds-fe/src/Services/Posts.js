import api from "./Api_config"

export const createPost = async (input) => {
  try {
    const res = await api.post(`/posts`, { post: input });
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getPosts = async (id) => {
  try {
    const res = await api.get(`/posts`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getPost = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const updatePost = async (id, updated) => {
  try {
    const res = await api.put(`/posts/${id}`, { post: updated });
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deletePost = async (id) => {
  try {
    const res = await api.delete(`/posts/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
}
