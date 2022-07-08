import axios from 'axios';

export default axios.create({
  // Base URL of my Python Flask Server
  baseURL: 'http://localhost:5000',
  responseType: 'json'
});