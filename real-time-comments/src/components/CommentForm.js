import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from '../utils/api';

const CommentForm = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = async () => {
    const username = localStorage.getItem('username');
    if (!comment) return alert('Comment cannot be empty');

    await axios.post('/api/comments', { username, comment });
    setComment('');
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <TextField
        fullWidth
        label="Your Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '10px' }}
        onClick={handleSubmit}
      >
        Post Comment
      </Button>
    </div>
  );
};

export default CommentForm;
