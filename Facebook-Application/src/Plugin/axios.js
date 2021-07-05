import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api-meme-zendvn-01.herokuapp.com/api',  // điền gì vào đấy nhỉ 
    
    headers: {'accept': 'application/json'}
  });

export default axiosInstance