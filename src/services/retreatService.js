
const API_BASE_URL = 'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats';
/**
 * Fetch retreats with pagination and optional query.
 * @param {number} page - The page number to fetch.
 * @param {string} query - The search query to filter results.
 * @param {string} type - The type to filter results.
 * @returns {Promise<Object>} - The JSON response from the API.
 */
export const fetchRetreats = async (page, query = '', type = '') => {
  try {
    const res = await fetch(`${API_BASE_URL}?search=${query}&filter=${type}&page=${page}&limit=3`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching retreats:', error);
    throw error; 
  }
};
