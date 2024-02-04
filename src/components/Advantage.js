import React, { useState } from 'react';
import { Box, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogActions ,Button } from '@mui/material';
import '../Style/Advantage.css';
import '../Style/DialogStyle.css';

const Advantage = ({ icon, text }) => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState('');

  const handleClickOpen = (event) => {
    switch (text) {
      case "הון התחלתי נמוך":
        setDetails("למסחר לא צריך להיות מיליונר - עם כמה שקלים בכיס וקצת אומץ בלב, אתה כבר בפנים! בעולם הזה, הקפה שלך יכול לעלות יותר מההשקעה הראשונית שלך. ואם אתה מנהל את כרטיסיות המסחר שלך נכון, הקפה הבא עלול להיות על חשבון הרווחים!");
        break;
      case "אפשרות לעבוד מכל מקום":
        setDetails("עם מסחר, העולם הוא לא רק מגרש המשחקים שלך - הוא גם המשרד שלך. שולחן בקפה בפריז או המרפסת שלך, הבחירה היא שלך. העבודה מהחוף? זה לא רק חלום, זו יכולה להיות היום שלך במשרד עם מסחר יומי.");
        break;
      case "גמישות בשעות העבודה":
        setDetails("במסחר , אתה קובע את קצב המשחק - עם גמישות בשעות עבודה, היום שלך יכול להתחיל בצהריים או אחרי הצהריים. נגמרו הימים שבהם השעון מעורר הוא האויב; פה אתה זה שאומר מתי הפעילות נפתחת ונסגרת. שכחו מ-9 ל-5, כאן אתה יכול לסחור תוך כדי צפייה בשקיעה, כי במסחר , השעון עובד לפי כללים שלך.");
        break;
      case "שוויון הזדמניות":
        setDetails("בעולם המסחר , כולם מתחילים מנקודת הפתיחה זהה - זהו מרוץ שבו האסטרטגיה שלך, ולא גודל הכיס שלך, קובעת את ההצלחה. כאן, בשוק ההון, כל אחד יכול להיות מנצח, כל עוד הוא מחובר לאינטרנט ויש לו תוכנה נכונה. אז תפרוס את המפות, כי במסחר יומי, המידע והזריזות שלך הם מטבע הזהב האמיתי. ");
        break;
      default:
        break;

    }


    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box className="advantage-box" onClick={handleClickOpen}>
        <IconButton className="advantage-icon">
          {icon}
        </IconButton>
        <Typography variant="subtitle1" className="advantage-text">
          {text}
        </Typography>
      </Box>


      <Dialog open={open} onClose={() => setOpen(false)} className="dialog-container">
      <DialogTitle className="dialog-title">{text}</DialogTitle>
      <DialogContent className="dialog-content">
        {details}
      </DialogContent>
      <DialogActions className="dialog-actions">
        <Button onClick={() => setOpen(false)} className="dialog-button">
          Close
        </Button>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default Advantage;
