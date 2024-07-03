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
            <a href="#" className="navbarLink">מסחר יומי</a>
            <a href="#" className="navbarLink">מסחר לונג</a>
            <a href="#" className="navbarLink">כלים</a>
            <a href="Psychology" className="navbarLink">פסיכולוגיה</a>
            <a href="#" className="navbarLink">אלגוריתם</a>
            <a href="Community" className="navbarLink">קהילה</a>
            <a href="BasicConcept" className="navbarLink">לומדת שוק ההון</a>
            <a href="/" className="navbarLink">דף בית</a>
          </Stack>

          {user && (
            <Avatar 
              src={`http://localhost:5000${user.profilePic}`} 
              alt={user.name}
              sx={{
                marginLeft: 'auto',
                width: '50px',
                height: '50px',
                '&:hover': {
                  cursor: 'pointer',
                  transform: 'scale(1.2)',
                  transition: 'transform 0.2s ease-in-out',
                },
              }}
            />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
