import React from 'react';
import { Box, Grid, Typography, Paper, Button } from '@mui/material';
import candels from '../img/candels.jpg';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const ImageTextDisplay = ({ textContent, url ,title}) => {
  const styles = {
    text: {
      direction: 'rtl',
      lineHeight: 1.6, // Adjust line height for better readability
      letterSpacing: '0.5px', // Slightly increase letter spacing
      color: '#333', // A darker shade for better contrast
      marginBottom: '16px', // Space between paragraphs
      fontWeight: 'bold',

    },
    header: {
      fontWeight: 'bold',
      marginBottom: '8px',
    },
      buttonContainer: {
      display: 'flex',      // Use Flexbox for alignment
      justifyContent: 'flex-end', // Aligns the content (button) to the end (right side)
    },
  };

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: '20px', margin: '20px' }}
      sx={{
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.03)', // Enlarges the whole component on hover
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              height: '450px',
              width: '100%',
              borderRadius: '4px',
            }}
            alt="Descriptive Alt Text"
            src={candels}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" style={{ ...styles.text, ...styles.header }}>
            {title}
          </Typography>
          <Typography variant="h6" style={styles.text}>
            {textContent}
          </Typography>

          <div style={styles.buttonContainer}>
            <Button variant='contained' color='success' onClick={handleClick} endIcon={<OndemandVideoIcon />}>
              לחץ כאן למעבר לסרטון הסבר
            </Button>
          </div>

        </Grid>
      </Grid>
    </Paper>
  );
};

export default ImageTextDisplay;
