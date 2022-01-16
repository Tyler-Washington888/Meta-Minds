import api from "./Api_config"




export const getUsers = async (id) => {
  try {
    const res = await api.get(`/users`);
    return res.data;
  } catch (e) {
    throw e;
  }
}