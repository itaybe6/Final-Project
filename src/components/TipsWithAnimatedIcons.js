import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import '../Style/test.css';
import plannedtrades from '../img/plannedtrades.webp';
import riskmanagement from '../img/riskmanagement.webp';
import rightpsychology from '../img/rightpsychology.webp';
import stoploss from '../img/stoploss.webp';
import profits from '../img/profits.webp';

const tips = [
  { title: "עסקאות מתוכננות מראש", description: "אל תרדוף אחרי טריידים שקפצו לך במסך בהפתעה, דבק בתוכנית שלך.", image: plannedtrades },
  { title: "תנהל סיכונים", description: "ניהול סיכונים הוא מפתח להצלחה. קבע את כמות הכסף שאתה מוכן להפסיד בעסקה.", image: riskmanagement },
  { title: "פסיכולוגית מסחר נכונה", description: "הכל מתחיל בראש. שמור על קור רוח ושיקול דעת.", image: rightpsychology },
  { title: "סטופ לוס זה ההגנה הכי טובה", description: "לא רוכבים על אופניים ללא קסדה - לא סוחרים ללא סטופ לוס.", image: stoploss },
  { title: "לעולם לא לשכוח לקחת רווחים", description: "חשוב לממש רווחים ולא להיות חמדן מדי.", image: profits },
];

const TipsWithAnimatedIcons = () => {
  return (
    <Box className="background">
      <Typography variant="h4" component="div" align="center" className="main-title">
        עקרונות בסיס להצלחה
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {tips.map((tip, index) => (
          <Box key={index} className="flip-card">
            <Typography variant="h6" component="div" align="center" className="tip-title">
              {tip.title}
            </Typography>
            <Box className="flip-card-inner">
              <Box className="flip-card-front">
                <CardMedia
                  component="img"
                  height="140"
                  image={tip.image}
                  alt={tip.title}
                  className="card-image"
                />
              </Box>
              <Box className="flip-card-back">
                <CardContent>
                  <Typography variant="body2" component="p" className="description-text">
                    {tip.description}
                  </Typography>
                </CardContent>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TipsWithAnimatedIcons;
