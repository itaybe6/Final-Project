import React from 'react';
import { Box } from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOn from '@mui/icons-material/LocationOn'; // Example icon, replace with your own
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import '../Style/Advantage.css'
import Advantage from './Advantage';

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
      <Advantage icon={<LocationOn />} text="אפשרות לעבוד מכל מקום" />
      <Advantage icon={<MonetizationOnIcon />} text="הון התחלתי נמוך" />
      <Advantage icon={<AccessTimeIcon />} text="גמישות בשעות העבודה" />
      <Advantage icon={<DragHandleIcon />} text="שוויון הזדמניות" />
    

    </Box>
  );
};

export default Advantages;
