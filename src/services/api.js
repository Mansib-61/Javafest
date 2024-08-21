import axios from 'axios';

const API_URL = "http://localhost:8080/api/";

export const register = (username, password) => {
  return axios.post(API_URL + "auth/register", {
    username,
    password,
  });
};

export const login = (username, password) => {
  return axios.post(API_URL + "auth/login", {
    username,
    password,
  }).then(response => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};

export const uploadPaper = (paper) => {
  return axios.post(API_URL + "papers", paper);
};

export const getPapers = (category, subject) => {
  return axios.get(API_URL + `papers?category=${category}&subject=${subject}`);
};

export const addReview = (review) => {
  return axios.post(API_URL + "reviews", review);
};
