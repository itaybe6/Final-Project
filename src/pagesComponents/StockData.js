import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style/StockData.css'; 
const apiKey = 'QWGKGSUY5S4KFPRN';

const StockData = () => {
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getStocksList = async () => {
    return ["MSFT", "AAPL", "NVDA", "AMZN", "GOOGL", 
            "META", "GOOG", "BRKB", "LLY", "AVGO",
            "JPM", "TSLA", "XOM", "UNH", "V",
            "PG", "JNJ", "COST", "MA", "HD",
            "PFE", "TMO", "MRK", "ABBV", "PEP",
            "CVX", "ACN", "NFLX", "ABT", "CMCSA"];
  };

  useEffect(() => {
    const fetchStockData = async (symbol) => {
      try {
        console.log(`Fetching data for ${symbol}...`);
        const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
        const response = await axios.get(apiUrl, { timeout: 10000 });
        const timeSeries = response.data['Time Series (Daily)'];

        if (timeSeries) {
          const formattedData = Object.keys(timeSeries).map(date => ({
            date,
            close: parseFloat(timeSeries[date]['4. close']),
          })).reverse();

          const rsi = calculateRSI(formattedData);
          const trend = calculateTrend(formattedData);
          const macdSignal = await calculateMACD(symbol);
          const criteriaCount = [rsi < 30, trend, macdSignal].filter(Boolean).length;

          if (!selectedStocks.some(s => s.symbol === symbol)) {
            setSelectedStocks(prevStocks => [
              ...prevStocks,
              { symbol, criteriaCount, latestClose: formattedData[0]?.close }
            ]);
          }

          console.log(`Data for ${symbol} processed successfully.`);
        } else {
          console.log(`No data for ${symbol}`);
        }
      } catch (error) {
        console.error(`Error fetching data for ${symbol}:`, error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const stocksList = await getStocksList();
        await Promise.all(stocksList.map(symbol => fetchStockData(symbol)));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedStocks]);

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

  const calculateTrend = (data) => {
    const daysToCheck = 40; // כ-2 חודשים (בערך 40 ימי מסחר)
    if (data.length < daysToCheck) return false;

    for (let i = 0; i < daysToCheck - 14; i++) {
      const currentPrice = data[i].close;
      const priceTwoWeeksAgo = data[i + 14].close;
      if (currentPrice <= priceTwoWeeksAgo) {
        return false;
      }
    }
    return true;
  };

  const calculateMACD = async (symbol) => {
    try {
      const apiUrl = `https://www.alphavantage.co/query?function=MACD&symbol=${symbol}&apikey=${apiKey}`;
      const response = await axios.get(apiUrl, { timeout: 10000 });
      const macdData = response.data['Technical Analysis: MACD'];

      if (macdData) {
        const latestDate = Object.keys(macdData)[0];
        const macd = parseFloat(macdData[latestDate]['MACD']);
        const signal = parseFloat(macdData[latestDate]['MACD_Signal']);
        return macd > signal;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`Error fetching MACD data for ${symbol}:`, error);
      return false;
    }
  };

  return (
    <div className="stock-scanner-container">
      <h1>Stock Scanner</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <h2>Recommended Stocks for Purchase</h2>
          <div className="recommended-stocks">
            {selectedStocks.filter(stock => stock.criteriaCount >= 2).map(stock => (
              <div key={stock.symbol} className="stock-card">
                <h3>{stock.symbol}</h3>
                <p>Latest Close: ${stock.latestClose || 'No Data'}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default StockData;
