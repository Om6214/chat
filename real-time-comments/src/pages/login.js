import { useState } from 'react';
import { useRouter } from 'next/router';
import { TextField, Button, Container } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!username) return alert('Username is required');
    localStorage.setItem('username', username);
    router.push('/');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <h1>Login</h1>
      <TextField
        fullWidth
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '20px' }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Container>
  );
};

export default Login;
