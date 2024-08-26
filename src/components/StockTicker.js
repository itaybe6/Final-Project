import React, { useEffect, useState } from 'react';
import Ticker from 'react-ticker';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import '../Style/StockTicker.css';

const stockSymbols = ["MSFT", "AAPL", "NVDA", "AMZN", "GOOGL", "META", "TSLA","AMD" ,"SMCI"];
const apiKey = 'QWGKGSUY5S4KFPRN'; // החלף ב-API Key שלך

const StockTicker = () => {
  const [stockPrices, setStockPrices] = useState([]);

  useEffect(() => {
    const fetchStockPrices = async () => {
      try {
        const responses = await Promise.all(
          stockSymbols.map(symbol =>
            axios.get(`https://www.alphavantage.co/query`, {
              params: {
                function: 'GLOBAL_QUOTE',
                symbol: symbol,
                apikey: apiKey
              }
            })
          )
        );

        const prices = responses.map(response => {
          const data = response.data['Global Quote'];
          return {
            symbol: data['01. symbol'],
            price: parseFloat(data['05. price']),
            change: parseFloat(data['09. change'])
          };
        });

        console.log(prices); // בדיקה של הנתונים בקונסול
        setStockPrices(prices);
      } catch (error) {
        console.error('Error fetching stock prices:', error);
      }
    };

    fetchStockPrices();
    const interval = setInterval(fetchStockPrices, 30000); // עדכון כל 30 שניות

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="ticker-container">
      <Ticker speed={10} mode="smooth">
        {() => (
          <div className="ticker-items">
            {stockPrices.map((stock, index) => (
              <div key={index} className="ticker-item">
                <Typography variant="body1" component="span" className="ticker-symbol">
                  {stock.symbol}: 
                </Typography>
                <Typography variant="body2" component="span" className="ticker-price">
                  ${stock.price.toFixed(2)} ({stock.change.toFixed(2)}%)
                </Typography>
              </div>
            ))}
          </div>
        )}
      </Ticker>
    </Box>
  );
};

export default StockTicker;
