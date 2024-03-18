import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOn from '@mui/icons-material/LocationOn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import '../Style/Advantage.css';
import Advantage from './Advantage';

const Advantages = () => {
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

  return (
    <Box
      ref={ref}
      className="animate-on-scroll" // Always apply this class
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
