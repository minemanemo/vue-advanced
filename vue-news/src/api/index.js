import axios from 'axios';

const apiClient = new axios.create({
  baseURL: 'https://api.hnpwa.com/v0',
});

export const fetchNewsList = () => {
  return apiClient
    .get('/news/1.json')
    .then((response) => response.data)
    .catch((e) => console.log(e));
};

export const fetchAskList = () => {
  return apiClient
    .get('/ask/1.json')
    .then((response) => response.data)
    .catch((e) => console.log(e));
};

export const fetchJobsList = () => {
  return apiClient
    .get('/jobs/1.json')
    .then((response) => response.data)
    .catch((e) => console.log(e));
};
