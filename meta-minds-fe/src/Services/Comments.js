import api from "./Api_config"

export const getComments = async () => {
  try {
    const res = await api.get(`/comments`);
    return res.data;
  } catch (e) {
    throw e;
  }
};