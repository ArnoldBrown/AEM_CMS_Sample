import axios from 'axios';

const AEM_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getCMSContent = async () => {
  try {
    const response = await axios.get(`${AEM_BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching CMS content:', error);
    return [];
  }
};
