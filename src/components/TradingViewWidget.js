import React, { useEffect, useRef, memo } from 'react';
import '../Style/TradingViewWidget.css'; // הוסף את הקובץ CSS

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    if (container.current.querySelector('script')) {
      return; // Exit if the script is already added
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "500",  // קבע את הרוחב הרצוי
        "height": "300", // קבע את הגובה הרצוי
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget" ref={container}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
