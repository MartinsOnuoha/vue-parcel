import axios from 'axios';

const baseURL = 'https://api.jsonbin.io';
const timeout = 10000;

const Api = axios.create({
  baseURL,
  timeout,
  headers: {
    'X-Custom-Header': 'test-app',
  },
});

export default Api;
