import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4000/posts', {
        title,
      });
    } catch (error) {
      console.log('Error Axios in client: ', error);
    }

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Post</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
