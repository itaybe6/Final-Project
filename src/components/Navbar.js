import React from 'react';
import { AppBar, Toolbar, Typography, Stack, Avatar } from '@mui/material';
import '../Style/Navbar.css';
import { useUser } from './UserContext'; // ייבוא הפונקציה לשימוש ב-UserContext
 

function Navbar() {
  const { user } = useUser(); // שימוש ב-Context לקבלת נתוני המשתמש

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Typography 
            variant="h6" 
            color="black" 
            align="center" 
            style={{ fontWeight: 'bold', fontSize: '2.2rem', width: '100%' }}
          >
            Stock4Life
          </Typography>
        </Toolbar>
      </AppBar>

      <AppBar position="static" style={{ backgroundColor: 'black', color : 'white'}}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={2} >
            <a href="signup" className="navbarLink">הרשמה</a>
            <a href="login" className="navbarLink">התחברות</a>
          </Stack>

          <Stack direction="row" spacing={2} className="navbar">
            <a href="DayTrade" className="navbarLink">מסחר יומי</a>
            <a href="LongTerm" className="navbarLink">מסחר לונג</a>
            <a href="TechnologicalTools" className="navbarLink">כלים</a>
            <a href="Psychology" className="navbarLink">פסיכולוגיה</a>
            <a href="StockData" className="navbarLink">אלגוריתם</a>
            <a href="BasicConcept" className="navbarLink">לומדת שוק ההון</a>
            <a href="/" className="navbarLink">דף בית</a>
          </Stack>

          {user && (
            <Avatar 
              src={`http://localhost:5000${user.profilePic}`} 
              alt={user.name}
              style={{ marginLeft: 'auto' }}
            />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
