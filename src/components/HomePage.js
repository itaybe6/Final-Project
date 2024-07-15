import React from 'react';
import { useUser } from './UserContext';
import TradingViewWidget from './TradingViewWidget';
import StockCarousel from './StockCarousel ';

function HomePage() {
  const { user } = useUser();
  console.log(user)
  return (
    <div>
      
      
      {user ? `Hello, ${user.id}` : 'Not logged in'}
      <StockCarousel />
      <TradingViewWidget />

    </div>
  );
}

export default HomePage;
