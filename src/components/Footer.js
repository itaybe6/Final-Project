import React, { useState } from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Paper } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ 
      marginTop:'100px',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'black', 
      color: 'white', 
      padding: '20px', 
      display: 'flex', 
      justifyContent: 'center',
      zIndex: 1000 // לוודא שהפוטר יהיה מעל כל התוכן
   }}>
      <Button
        startIcon={<InfoIcon />}
        sx={{ margin: '0 10px', color: 'white' }}
        onClick={handleOpen}
      >
        אודות
      </Button>
      <Button
        startIcon={<EmailIcon />}
        sx={{ margin: '0 10px', color: 'white' }}
        onClick={() => {/* Handle Email click here */ }}
      >
        צור קשר 
      </Button>

      <Dialog open={open} onClose={handleClose} PaperProps={{
        sx: {
          backgroundColor: 'black', color: 'white', borderRadius: '15px',transition: '0.3s', '&:hover': {
            backgroundColor: '#505050', // אפשר לשנות את צבע הרקע כאן
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // הוספת צל
            transform: 'scale(1.05)' // הקלף יגדל מעט
          }
        }
      }}>
        <DialogTitle  sx={{ color: 'black', fontSize: '30px', fontWeight :'bold' ,backgroundColor : 'rgb(143, 206, 185)', textAlign:'center'}}>אודות</DialogTitle>
        <DialogContent>
          <Paper sx={{
            backgroundColor: 'black',
            padding: '20px',
            borderRadius: '10px',
           
          }}>
            <DialogContentText sx={{ color: 'white', fontSize: '16px', lineHeight: '2' }}>
איתי בן יאיר וטל מימון , סטודנטים להנדסת תוכנה עם ניסיון של שנים בשוק ההון             </DialogContentText>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: 'white' ,fontWeight :'bold'  }}>
            סגור
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Footer;
