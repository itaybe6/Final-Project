import React, { useState, useEffect } from 'react';

const DailyMarketOverview = () => {
  const [marketData, setMarketData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMarketData();
      setMarketData(data);
    };

    getData();
  }, []);

  if (!marketData) {
    return <div>Loading...</div>;
  }
  
  const fetchMarketData = async () => {
    const response = await fetch('https://api.marketdata.com/v1/daily-overview');
    const data = await response.json();
    return data;
  };

  return (
    <div className="market-overview">
      <h2>סקירת שוק יומית</h2>
      <div>
        <h3>מניות מובילות</h3>
        <ul>
          {marketData.topStocks.map((stock) => (
            <li key={stock.symbol}>{stock.name}: {stock.price}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>מדדים עיקריים</h3>
        <ul>
          {marketData.indices.map((index) => (
            <li key={index.symbol}>{index.name}: {index.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DailyMarketOverview;
