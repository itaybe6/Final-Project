import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // for move between pages
import { useUser } from './UserContext';

const Login = () => {
  const { setUser } = useUser(); // for the pass the details of the user 
  const navigate = useNavigate(); // for the navigate
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({ email, password });
      const response = await axios.post('http://localhost:5000/users/login', body, config);
      console.log(response.data);
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data)); // שמירת המשתמש ב-localStorage
      navigate('/BasicConcept'); // after the login success move to home page
    } catch (err) {
      console.error(err.response.data); // Handle errors
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          borderRadius: "20px",
          padding: "30px",
          bgcolor: '#98FB98',
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form onSubmit={e => onSubmit(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={e => onChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => onChange(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
