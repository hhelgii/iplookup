import axios from 'axios';
import apiInfo from './apiInfo';
export const fetchInfo = async (ipAdr, apiKey) => {
  const { data } = await axios.get(apiInfo.BASE_URL, {
    params: { address: ipAdr },
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    },
  });
  return data;
};
