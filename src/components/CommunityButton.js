import React from 'react';
import { Box, Typography, Button  } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

const CommunityButton = ({ onClick ,drawerOpen}) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 150,
        right: drawerOpen ? 360 : 16,
        zIndex: 1300,
        backgroundColor: '#000',
        color: 'white',
        padding: 5,
        borderRadius: 3,
        fontSize: '1rem',
        width: 300,
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.5)',
        transition: 'transform 0.3s,right 0.5s ease',
        transform: 'scale(1)',
        '&:hover': {
        
          transform: 'scale(1.05)',
        },
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="flex-start">
       
      <Button
        onClick={onClick}
        variant="contained"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Arial',
          color: 'white',
          backgroundColor: '#0c69ff',
          borderRadius: '10px',
          padding: 1.5,
          width: 300,
          fontSize: '1.2rem',
          '&:hover': {
            backgroundColor: '#2f7bf6',
          },
        }}
        startIcon={<ForumIcon />}
      >
        Stock4Life
      </Button>
      </Box>
      <Typography variant="body3" sx={{ marginTop: 1, fontFamily: 'Arial', color: '#ffffff' }}>
        הצטרפו לקהילה שלנו! תיהנו מתמיכה ייחודית ומידע מקיף על השקעות. אנחנו כאן לעזור לכם להצליח!
      </Typography>
    </Box>
  );
};

export default CommunityButton;
