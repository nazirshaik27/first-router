// src/components/Posts.js
import React, { useEffect, useState } from 'react';
import { fetchPosts, createPost } from '../api';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        setError('Failed to fetch posts.');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const createdPost = await createPost(newPost);
      setPosts([...posts, createdPost]); // Update posts with the newly created post
      setNewPost({ title: '', body: '' }); // Reset the form
    } catch (error) {
      setError('Failed to create post.');
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          placeholder="Title"
          required
        />
        <textarea
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          placeholder="Body"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Posts;

