import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Select from 'react-select';

const apiKey = 'OKAZF0YLZAQ11FRA';

const StockData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [stocksList, setStocksList] = useState([]);

  const getStocksList = async () => {
    // Replace with a function to fetch S&P 500 stocks
    return ["AAPL", "MSFT", "GOOGL", "AMZN", "IBM"];
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const stocks = await getStocksList();
        setStocksList(stocks);
        const results = await Promise.all(stocks.map(symbol => fetchStockData(symbol)));
        setSelectedStocks(results.filter(stock => stock.meetsCriteria));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchStockData = async (symbol) => {
    try {
      const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
      const response = await axios.get(apiUrl);
      const timeSeries = response.data['Time Series (Daily)'];

      if (timeSeries) {
        const formattedData = Object.keys(timeSeries).map(date => ({
          date,
          close: parseFloat(timeSeries[date]['4. close']),
          volume: parseInt(timeSeries[date]['5. volume'])
        })).reverse();

        const meetsCriteria = checkCriteria(formattedData);
        return { symbol, meetsCriteria, data: formattedData };
      }
    } catch (error) {
      throw error;
    }
  };

  const checkCriteria = (data) => {
    // Implement the criteria check
    if (data.length < 4) return false;

    let dropCount = 0;
    let decreasingVolume = true;

    for (let i = 0; i < 3; i++) {
      if (data[i].close > data[i + 1].close) {
        dropCount++;
      }
      if (data[i].volume <= data[i + 1].volume) {
        decreasingVolume = false;
      }
    }

    const dropPercentage = ((data[0].close - data[3].close) / data[0].close) * 100;
    const volumeDropPercentage = ((data[0].volume - data[3].volume) / data[0].volume) * 100;

    const rsi = calculateRSI(data);

    return dropCount >= 3 && dropPercentage >= 9 && dropPercentage <= 14 && decreasingVolume && volumeDropPercentage >= 20 && volumeDropPercentage <= 50 && rsi < 30;
  };

  const calculateRSI = (data, period = 14) => {
    let gains = 0, losses = 0;
    for (let i = 1; i <= period; i++) {
      const difference = data[i].close - data[i - 1].close;
      if (difference >= 0) {
        gains += difference;
      } else {
        losses -= difference;
      }
    }
    const avgGain = gains / period;
    const avgLoss = losses / period;
    const rs = avgGain / avgLoss;
    return 100 - (100 / (1 + rs));
  };

  return (
    <div className="stock-data-container">
      <h1>Stock Data Meeting Criteria</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : selectedStocks.length === 0 ? (
        <div>No stocks meet the criteria.</div>
      ) : (
        selectedStocks.map(stock => (
          <div key={stock.symbol}>
            <h2>{stock.symbol}</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={stock.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="close" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))
      )}
    </div>
  );
};

export default StockData;
