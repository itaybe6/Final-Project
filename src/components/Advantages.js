import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync'; // Example icon, replace with your own
import StarIcon from '@mui/icons-material/Star'; // Example icon, replace with your own
import PublicIcon from '@mui/icons-material/Public'; // Example icon, replace with your own
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // Example icon, replace with your own
import '../Style/Advantage.css'


const Advantage = ({ icon, text }) => (
  <Box className="advantage-box">
  <IconButton className="advantage-icon">
    {icon}
  </IconButton>
  <Typography variant="subtitle1" className="advantage-text">
    {text}
  </Typography>
</Box>
);

const Advantages = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Advantage icon={<SyncIcon />} text="Transparent Process" />
      <Advantage icon={<StarIcon />} text="Quality Services" />
      <Advantage icon={<PublicIcon />} text="Online Consulting" />
      <Advantage icon={<AttachMoneyIcon />} text="Cost Effective" />
    </Box>
  );
};

export default Advantages;
