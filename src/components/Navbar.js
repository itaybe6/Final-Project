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

      <AppBar position="static" style={{ backgroundColor: 'black', color : 'white'}}>
        <Toolbar style={{ justifyContent: 'space-between' }}>

          <Stack direction="row" spacing={2} >
            <a href="signup"  className="navbarLink" >הרשמה</a>
            <a href="login" className="navbarLink">התחברות</a>
          </Stack>

          {/* כפתורים קיימים */}
          <Stack direction="row" spacing={2} className="navbar">
            <a href="#" className="navbarLink">מסחר יומי</a>
            <a href="#" className="navbarLink">מסחר לונג</a>
            <a href="#" className="navbarLink">כלים</a>
            <a href="Psychology" className="navbarLink">פסיכולוגיה</a>
            <a href="#" className="navbarLink">אלגוריתם</a>
            <a href="#" className="navbarLink">קהילה</a>
            <a href="BasicConcept" className="navbarLink">לומדת שוק ההון</a>
            <a href="/" className="navbarLink">דף בית</a>

          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
