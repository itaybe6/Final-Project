
import Introduction from '../components/Introduction';
import '../Style/Psychology.css'
import RowTopics from '../components/RowTopics';
import FundamentalAnalysisCarousel from '../components/FundamentalAnalysisCarousel';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const StockData = () => {
  const [symbol, setSymbol] = useState('IBM'); // Default symbol
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=HN35HLB7PSXEIDHA`;
        const response = await axios.get(apiUrl);
        const timeSeries = response.data['Time Series (Daily)'];
        const formattedData = Object.keys(timeSeries).map(date => ({
          date,
          close: parseFloat(timeSeries[date]['4. close'])
        }));
        setData(formattedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol]);

  const handleSymbolChange = (event) => {
    setSymbol(event.target.value);
  };

  return (
    <div>
      <select onChange={handleSymbolChange} value={symbol}>
        <option value="IBM">IBM</option>
        <option value="AAPL">Apple (AAPL)</option>
        <option value="GOOGL">Google (GOOGL)</option>
        <option value="MSFT">Microsoft (MSFT)</option>
        <option value="AMZN">Amazon (AMZN)</option>
      </select>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
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
      )}
    </div>
  );
};

export default StockData;
