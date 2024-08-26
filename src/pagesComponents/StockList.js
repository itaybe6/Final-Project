import React from 'react';
import { Box, Typography, Grid, Card, CardContent, IconButton } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import '../Style/StockList.css';

const strongBuyStocks = ["MSFT", "AAPL", "NVDA", "AMZN", "GOOGL"];
const buyStocks = ["META",  "LLY", "AVGO", "JPM", "TSLA", "PFE", "CMCSA"];

const StocksList = () => {
  return (
    <Box className="stocks-container">
      <Typography variant="h4" component="div" gutterBottom>
        📈 רשימת מניות
      </Typography>

      <Typography variant="h5" component="div" gutterBottom>
        🟢 המלצה חזקה
      </Typography>
      <Grid container spacing={3}>
        {strongBuyStocks.map((stock, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="stock-card strong-buy">
              <CardContent>
                <Box className="stock-header">
                  <Typography variant="h6" component="div">
                    {stock}
                  </Typography>
                  <IconButton className="up-icon" size="small">
                    <ArrowUpward />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" component="div" gutterBottom>
        🟡 המלצה
      </Typography>
      <Grid container spacing={3}>
        {buyStocks.map((stock, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="stock-card buy">
              <CardContent>
                <Box className="stock-header">
                  <Typography variant="h6" component="div">
                    {stock}
                  </Typography>
                  <IconButton className="down-icon" size="small">
                    <ArrowDownward />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StocksList;
