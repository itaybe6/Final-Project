import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const apiKey = 'FZ81OWVZF72E4GI5'; // Replace with your Alpha Vantage API key
const stockSymbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB'];

const StockCarousel = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const responses = await Promise.all(
          stockSymbols.map(symbol =>
            axios.get(`https://www.alphavantage.co/query`, {
              params: {
                function: 'GLOBAL_QUOTE',
                symbol,
                apikey: apiKey
              }
            })
          )
        );

        const stockData = responses.map(response => response.data['Global Quote']);
        console.log('Fetched stocks:', stockData);
        setStocks(stockData.filter(stock => stock)); // Filtering out undefined or null values
      } catch (err) {
        console.error('Error fetching stock data:', err);
        setError('Failed to fetch stock data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  const renderStockItems = () => {
    return stocks.map((stock, index) => {
      const symbol = stock && stock['01. symbol'];
      const price = stock && stock['05. price'];
      const change = stock && stock['09. change'];
      const changePercent = stock && stock['10. change percent'];

      if (!symbol || !price || !change || !changePercent) {
        console.error(`Stock data is incomplete for index ${index}:`, stock);
        return null;
      }

      return (
        <Card key={index} style={{ margin: '10px', width: '200px' }}>
          <CardContent>
            <Typography variant="h6">{symbol}</Typography>
            <Typography variant="body2">Price: {price}</Typography>
            <Typography variant="body2">Change: {change} ({changePercent})</Typography>
          </CardContent>
        </Card>
      );
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Carousel>
      {renderStockItems()}
    </Carousel>
  );
};

export default StockCarousel;
