import React, { useState } from 'react';
import axios from 'axios';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // ffor move between pages
//import '../Style/SignUp.css'
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

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
      const body = JSON.stringify({ name, email, password });
      const response = await axios.post('http://localhost:5000/users/signup', body, config);
      console.log(response.data); // Handle the response from the server
      navigate('/');
    } catch (err) {
      console.error(err.response.data); // Handle errors
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ bgcolor: '#0a1823', p: 3, borderRadius: 2, boxShadow: 3, color: '#fff' }}>
      <Box sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: '#0a1823',
        p: 3,
        borderRadius: 2,
        boxShadow: 1,
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        '& .MuiButton-root': { m: 1, width: '25ch' }
      }}>
        <Typography component="h1" variant="h5" gutterBottom>
          SignUp
        </Typography>

        <Box component="form" noValidate onSubmit={e => onSubmit(e)} sx={{ width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            autoComplete="fullName"
            autoFocus
            variant="filled"
            InputLabelProps={{ style: { color: '#aaa' } }}
            InputProps={{
              style: { color: '#fff' },
              disableUnderline: true
            }}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
              '& .MuiFilledInput-root': {
                '&:after': {
                  borderBottomColor: '#69d982',
                },
              },
              '& .Mui-focused': {
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                borderColor: '#69d982',
              }
            }}
          />
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
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: '#69d982',
              color: '#0a1823',
              '&:hover': {
                bgcolor: 'rgba(105, 217, 130, 0.8)'
              },
              borderRadius: 1,
            }}
          >
            Create My Account
          </Button>
        </Box>
        <Typography variant="body2" mt={2}>
          Already have an account? Login instead
        </Typography>
      </Box>
    </Container>
  );
}

export default SignUp;
