import React from 'react';
import { Grid, Card, CardContent, Typography, Icon } from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';
import '../Style/Psychology.css'; // ודא שהוספת סגנון מתאים ב-CSS

const pros = [
  "פוטנציאל רווח גבוה",
  "מתאים כהכנסה נוספת",
  "אין דאגות בלילה",
  "מינוף עד פי 4"
];

const cons = [
  "סיכון גבוה",
  "דורש ניסיון ולמידה",
  "משמעת עצמית אדירה",
  "תנודתיות רגשית"
];

const descriptions = {
  "פוטנציאל רווח גבוה": "מסחר יומי יכול להניב רווחים גדולים בזמן קצר. סוחרים יומיים יכולים להרוויח עשרות ומאות אחוזים בשנה, אבל זכרו – הסיכון הוא בהתאם. לכן חשוב להתחיל עם חשבון דמו.",
  "מתאים כהכנסה נוספת": "מסחר יומי לא דורש משרה מלאה ויכול לשמש כהכנסה נוספת עם השקעה של כשעתיים ביום בלבד.",
  "אין דאגות בלילה": "אין דאגה לפוזיציות פתוחות בלילה – סוחרים יומיים סוגרים את העסקאות במהלך היום, כך שהם ישנים בראש שקט.",
  "מינוף עד פי 4": "מסחר יומי בבורסה האמריקאית מאפשר מינוף עד פי 4, מה שמאפשר לסחור בסכומים גדולים גם עם הון התחלתי קטן.",
  "סיכון גבוה": "מסחר יומי הוא המסוכן ביותר בשוק ההון. הפסדים יכולים להתרחש במהירות אם לא מנהלים סיכונים כראוי.",
  "דורש ניסיון ולמידה": "ללא ידע מתאים וניסיון, קשה להצליח במסחר יומי. חשוב להתחיל עם חשבון דמו ולצבור ניסיון לפני שמתחילים לסחור בכסף אמיתי.",
  "משמעת עצמית אדירה": "מסחר יומי דורש משמעת עצמית והיצמדות לכללים. טעות אחת קטנה יכולה להוביל להפסדים משמעותיים.",
  "תנודתיות רגשית": "מסחר יומי הוא רכבת הרים של רגשות. אם אתם לא יכולים להתמודד עם הפסדים בצורה טובה, ייתכן שזה לא התחום המתאים לכם."
};

const TradeProsCons = () => {
  return (
    <div style={{ backgroundColor: '#121212', color: 'white', padding: '20px', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#ffffff' }}>יתרונות וחסרונות של מסחר יומי</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom style={{ color: '#ffffff' }}>יתרונות</Typography>
          {pros.map((pro, index) => (
            <Card key={index} style={{ marginBottom: '10px', transition: 'transform 0.3s, background-color 0.3s' }} className="hover-card">
              <CardContent>
                <Typography variant="h6" component="div">
                  <Icon component={CheckCircle} style={{ color: 'green', marginRight: '5px' }} />
                  {pro}
                </Typography>
                <Typography variant="body2" color="black" style={{ color: 'black' }}>
                  {descriptions[pro]}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom style={{ color: '#ffffff' }}>חסרונות</Typography>
          {cons.map((con, index) => (
            <Card key={index} style={{ marginBottom: '10px',  transition: 'transform 0.3s, background-color 0.3s' }} className="hover-card">
              <CardContent>
                <Typography variant="h6" component="div">
                  <Icon component={Cancel} style={{ color: 'red', marginRight: '5px' }} />
                  {con}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ color: 'black' }}>
                  {descriptions[con]}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default TradeProsCons;
