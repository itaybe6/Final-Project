import React, { useState, useEffect } from 'react';
import { Box, Typography, Select, MenuItem, TextField, Button } from '@mui/material';
import '../Style/TradingCalculator.css';

const TradingCalculator = () => {
    const [experience, setExperience] = useState('');
    const [portfolioSize, setPortfolioSize] = useState('');
    const [riskPercentage, setRiskPercentage] = useState('');
    const [riskAmount, setRiskAmount] = useState('');

    useEffect(() => {
        // קביעת אחוז הסיכון ברירת מחדל לפי רמת ניסיון
        switch (experience) {
            case 'beginner':
                setRiskPercentage(1); // 1% לסוחרים מתחילים
                break;
            case 'intermediate':
                setRiskPercentage(2); // 2% לסוחרים בינוניים
                break;
            case 'veteran':
                setRiskPercentage(3); // 3% לסוחרים ותיקים
                break;
            default:
                setRiskPercentage(''); // ניקוי השדה אם לא נבחרה רמת ניסיון
                break;
        }
    }, [experience]);

    const handleCalculate = () => {
        if (portfolioSize && riskPercentage) {
            const riskAmount = (portfolioSize * riskPercentage) / 100;
            setRiskAmount(riskAmount.toFixed(2));
        }
    };

    return (
        <Box className="calculator-container">
            <Typography variant="h4" component="div" gutterBottom className="Ctitle">
                מחשבון מסחר
            </Typography>

            <Typography variant="h6" component="div">
                טווח ותק של המשתמש
            </Typography>
            <Select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                displayEmpty
                fullWidth
                inputProps={{ style: { color: 'white' } }} // צבע הטקסט בתוך Select
                style={{ color: 'white' }} // צבע הטקסט כאשר Select סגור
            >
                <MenuItem value="" disabled style={{ color: 'grey' }}>בחר טווח ותק</MenuItem>
                <MenuItem value="beginner" style={{ color: 'white' }}>סוחר מתחיל (0-1 שנה בתחום)</MenuItem>
                <MenuItem value="intermediate" style={{ color: 'white' }}>1-3 שנים בתחום</MenuItem>
                <MenuItem value="veteran" style={{ color: 'white' }}>סוחר ותיק (3 שנים ומעלה)</MenuItem>
            </Select>


            <Typography variant="h6" component="div">
                גודל התיק (₪)
            </Typography>
            <TextField
                value={portfolioSize}
                onChange={(e) => setPortfolioSize(e.target.value)}
                placeholder="הכנס את גודל התיק"
                fullWidth
                margin="normal"
                inputProps={{ style: { color: 'white' } }}
            />

            <Typography variant="h6" component="div">
                אחוז הסיכון לעסקה (%)
            </Typography>
            <TextField
                value={riskPercentage}
                onChange={(e) => setRiskPercentage(e.target.value)}
                placeholder="הכנס את אחוז הסיכון"
                fullWidth
                margin="normal"
                inputProps={{ style: { color: 'white' } }}
            />

            <Button variant="contained" color="primary" onClick={handleCalculate} fullWidth>
                חשב סיכון
            </Button>

            {riskAmount && (
                <Typography variant="h6" component="div" color="primary" margin="normal">
                    סכום הסיכון לעסקה {riskAmount} ₪
                </Typography>
            )}
        </Box>
    );
};

export default TradingCalculator;
