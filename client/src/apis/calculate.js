import axios from 'axios';

export default axios.create({
  // Base URL of my Python Flask Server
  baseURL: 'http://127.0.0.1:5000/',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json'
});