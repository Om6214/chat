import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import { socket } from '../utils/socket';
import axios from '../utils/api';

const HomePage = () => {
  const router = useRouter();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (!username) router.push('/login');

    const fetchComments = async () => {
      const response = await axios.get('/api/comments');
      setComments(response.data);
    };

    fetchComments();

    socket.on('new-comment', (comment) => {
      setComments((prev) => [...prev, comment]);
    });

    return () => socket.off('new-comment');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username'); // Remove user info from local storage
    router.push('/login'); // Redirect to login page
  };

  return (
    <>
      {/* AppBar for Logout */}
      <AppBar position="static">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">Comment System</Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="sm">
        <Typography variant="h4" style={{ marginTop: '20px', textAlign: 'center' }}>
          Comment System by Omnath...
        </Typography>
        <CommentForm />
        <CommentList comments={comments} />
      </Container>
    </>
  );
};

export default HomePage;
