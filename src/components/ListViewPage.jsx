import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/ListViewPage.css';

function ListViewPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="list-view-container">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar fade-in"
      />
      <h1 className='list-head'>POSTS</h1>
      <ul className="posts-list">
        {filteredPosts.map(post => (
          <li key={post.id} className="post-card fade-in">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className="post-meta">By User {post.userId} on {new Date().toLocaleDateString()}</p>
            <Link to={`/detail/${post.id}`} className="view-more-btn">View More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListViewPage;