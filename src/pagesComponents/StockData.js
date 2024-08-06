import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = 'QWGKGSUY5S4KFPRN';

const StockData = () => {
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getStocksList = async () => {
    return [
      "OTLK", "HGEN", "PTN", "ACST", "ETON",
      "ALDX", "ZOM", "NNVC", "TXMD", "SNGX", "XERS", "PSTI", "REPH", "SNCA", "KMPH",
      "PULM", "SMMT", "CTXR", "SCYX", "APD", "APH", "ARE", "ATO", "AVB", "AVY"
    ];
  };

  useEffect(() => {
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

          const rsi = calculateRSI(formattedData);
          const meetsCriteria = rsi < 30;

          return { symbol, rsi, meetsCriteria, data: formattedData };
        } else {
          return { symbol, rsi: null, meetsCriteria: false, data: [] };
        }
      } catch (error) {
        console.error(`Error fetching data for ${symbol}:`, error);
        return { symbol, rsi: null, meetsCriteria: false, data: [] };
      }
    };

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const stocksList = await getStocksList();
        const results = await Promise.all(stocksList.map(symbol => fetchStockData(symbol)));
        setSelectedStocks(results.filter(stock => stock.meetsCriteria));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    <div className="stock-scanner-container">
      <h1>Stock Scanner</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : selectedStocks.length === 0 ? (
        <div>No stocks meet the criteria.</div>
      ) : (
        <ul>
          {selectedStocks.map(stock => (
            <li key={stock.symbol}>
              {stock.symbol} - Latest Close: ${stock.data[0]?.close || 'No Data'} - RSI: {stock.rsi.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StockData;
