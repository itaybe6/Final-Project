import React, { useState } from 'react';
import axios from 'axios';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profilePic: null,
  });
  const [preview, setPreview] = useState(null);

  const { name, email, password, profilePic } = formData;

  const onChange = (e) => {
    if (e.target.name === 'profilePic') {
      const file = e.target.files[0];
      setFormData({ ...formData, profilePic: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('email', email);
    formDataToSend.append('password', password);
    if (profilePic) {
      formDataToSend.append('profilePic', profilePic);
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const response = await axios.post('http://localhost:5000/users/signup', formDataToSend, config);
      console.log(response.data);
      navigate('/');
    } catch (err) {
      console.error(err.response.data); // Handle errors
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: '30px', bgcolor: '#708090', p: 3, borderRadius: 20, boxShadow: 3, color: '#fff' }}>
      <Box sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: '#708090',
      }}>
        <Typography component="h1" variant="h5" gutterBottom>
          SignUp
        </Typography>

        <Box component="form" noValidate onSubmit={e => onSubmit(e)} sx={{ width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
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
            onChange={e => onChange(e)}
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
          <Typography component="h6" variant="h6" gutterBottom>
            Upload a Profile Picture
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="file"
              name="profilePic"
              accept="image/*"
              onChange={e => onChange(e)}
              style={{ display: 'none' }}
              id="upload-button"
            />
            <label htmlFor="upload-button">
              <Button
                variant="contained"
                component="span"
                sx={{
                  bgcolor: '#69d982',
                  color: '#0a1823',
                  '&:hover': {
                    bgcolor: 'rgba(105, 217, 130, 0.8)',
                  },
                  borderRadius: 1,
                }}
              >
                Choose File
              </Button>
            </label>
            {preview && (
              <Box
                component="img"
                src={preview}
                alt="Profile Preview"
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  marginLeft: 2,
                }}
              />
            )}
          </Box>
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
                bgcolor: 'rgba(105, 217, 130, 0.8)',
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
