import React from 'react';
import { useUser } from './UserContext';
import TradingViewWidget from './TradingViewWidget';
import StockCarousel from './StockCarousel ';
import TipsWithAnimatedIcons from './TipsWithAnimatedIcons';
import TradingCalculator from './TradingCalculator'


function HomePage() {
  const { user } = useUser();
  return (
    <div>
      
      
      {user ? `Hello, ${user.id}` : 'Not logged in'}

      <TradingCalculator/>
      <StockCarousel />
      <TradingViewWidget />
      <TipsWithAnimatedIcons />

    </div>
  );
}

export default HomePage;
