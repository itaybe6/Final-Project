import { Box, Grid, Typography, Paper, Button } from '@mui/material';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import React, { useState, useEffect, useRef } from 'react';

const ImageTextDisplay = ({ obj, img }) => {
  const [hover, setHover] = useState(false);
  const styles = {
    text: {
      direction: 'rtl',
      lineHeight: 1.6,
      letterSpacing: '0.5px',
      color: '#333',
      marginBottom: '16px',
      fontWeight: 'bold',
    },
    header: {
      fontWeight: 'bold',
      marginBottom: '8px',
      direction: 'rtl',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    paper : {
      adding: '20px',
      margin: '20px',
      
    },
    paperHover: {
      transform: 'scale(1.02)', 
    },

    // if i want to design all the component is here 
    grid :{
      transition: 'transform 0.3s ease', 
    }
  };

  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleClick = () => {
    window.open(obj.url, '_blank');
  };

  return (
    <Paper
      ref={ref}
      elevation={3}
      style={{  ...styles.paper,
        ...(hover ? styles.paperHover : null),
      }}
      
    >
      <Grid container spacing={2} 
      style={{  ...styles.grid,
        ...(hover ? styles.paperHover : null),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      >
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              height: '450px',
              width: '90%',
              borderRadius: '40px',
            }}
            alt="Descriptive Alt Text"
            src={img}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" style={styles.header}>
            {obj.title}
          </Typography>
          <Typography variant="h6" style={styles.text}>
            {obj.content_text}
          </Typography>

          {obj.url && (
            <div style={styles.buttonContainer}>
              <Button variant='contained' color='success' onClick={handleClick} endIcon={<OndemandVideoIcon />}>
                לחץ כאן למעבר לסרטון הסבר
              </Button>
            </div>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ImageTextDisplay;
