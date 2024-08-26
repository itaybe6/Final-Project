import React from 'react';
import { useUser } from './UserContext';
import TradingViewWidget from './TradingViewWidget';
import StockCarousel from './StockCarousel ';
import TipsWithAnimatedIcons from './TipsWithAnimatedIcons';
import TradingCalculator from './TradingCalculator'
import { Typography, Box } from '@mui/material';

import '../Style/Home.css'; // ודא שיש לך את הקובץ הזה עם העיצובים

function HomePage() {
  const { user } = useUser();
  return (
    <div>
      
      
      <Box className="user-greeting">
        {user ? (
          <Typography variant="h5" component="div">
            שלום, <span className="user-name">{user.name}</span>!
          </Typography>
        ) : (
          <Typography variant="h6" component="div">
           שלום אורח
          </Typography>
        )}
      </Box>

      <TradingCalculator/>
      <StockCarousel />
      <TradingViewWidget />
      <TipsWithAnimatedIcons />

    </div>
  );
}

export default HomePage;
