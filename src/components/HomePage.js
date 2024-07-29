import React from 'react';
import { useUser } from './UserContext';
import TradingViewWidget from './TradingViewWidget';
import StockCarousel from './StockCarousel ';
import TipsWithAnimatedIcons from './TipsWithAnimatedIcons';


function HomePage() {
  const { user } = useUser();
  console.log(user)
  return (
    <div>
      
      
      {user ? `Hello, ${user.id}` : 'Not logged in'}
      <StockCarousel />
      <TradingViewWidget />
      <TipsWithAnimatedIcons />

    </div>
  );
}

export default HomePage;
