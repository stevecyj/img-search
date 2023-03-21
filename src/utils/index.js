import axios from 'axios';

export const getImages = async (query) => {
  const ACCESS_KEY = import.meta.env.VITE_API_KEY;
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
