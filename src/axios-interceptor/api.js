// src/api.js
import axiosInstance from './axiosInstance';

// Function to fetch posts
export const fetchPosts = async () => {
  const response = await axiosInstance.get('/posts'); // GET request to fetch posts
  return response.data;
};

// Function to create a post
export const createPost = async (postData) => {
  const response = await axiosInstance.post('/posts', postData); // POST request to create a post
  return response.data;
};
