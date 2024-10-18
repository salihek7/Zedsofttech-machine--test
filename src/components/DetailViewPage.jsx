import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/DetailViewPage.css';

function DetailViewPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!post) return <p className="loading">Loading...</p>;

  return (
    <div className="detail-view-container">
      <img src={`https://picsum.photos/800/300?random=${id}`} alt="Post Header" className="header-image" />
      <div className="post-card">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-author">By User {post.userId}</p>
        <p className="post-body">{post.body}</p>
        <Link to="/list" className="back-to-list-btn">Back to List View</Link>
      </div>
    </div>
  );
}

export default DetailViewPage;