import React from 'react';
import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import '../Style/Navbar.css'; // וודא שהסגנונות כלולים כאן

function Navbar() {
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

      <AppBar position="static" style={{ backgroundColor: 'rgb(143, 206, 185)', border: '2px solid black' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>

          {/* כפתורים להרשמה והתחברות */}
          <Stack direction="row" spacing={2}>
            <Button startIcon={<AccountCircleIcon />} className="navbarLink">הרשמה</Button>
            <Button startIcon={<LockOpenIcon />} className="navbarLink">התחברות</Button>
          </Stack>

          {/* כפתורים קיימים */}
          <Stack direction="row" spacing={2} className="navbar">
            <a href="#" className="navbarLink">דף בית</a>
            <a href="BasicConcept" className="navbarLink">מושגים</a>
            <a href="StockExchange" className="navbarLink">הבורסה</a>
            <a href="#" className="navbarLink">מדדים</a>
            <a href="#" className="navbarLink">מסחר יומי</a>
            <a href="#" className="navbarLink">מסחר לונג</a>
            <a href="#" className="navbarLink">כלים</a>
            <a href="#" className="navbarLink">פסיכולוגיה</a>
            <a href="#" className="navbarLink">אלגוריתם</a>
            <a href="#" className="navbarLink">קהילה</a>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
