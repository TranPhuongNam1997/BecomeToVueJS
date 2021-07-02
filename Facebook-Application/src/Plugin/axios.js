import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://some-domain.com/api/',  // điền gì vào đấy nhỉ 
    
    headers: {'accept': 'application/json'}
  });

export default axios