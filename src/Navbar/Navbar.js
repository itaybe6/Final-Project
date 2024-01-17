import { Stack } from '@mui/material';
import '../Style/Navbar.css';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Navbar() {
  return (
    <div>
       <AppBar position="static" style={{ backgroundColor:'white'}}>
        <Toolbar>
          <Typography 
            variant="h6" 
            color="black" 
            align="center" 
            style={{ fontWeight: 'bold', fontSize: '2.2rem', width: '100%' }}
          >
Stock4Life          </Typography>
        </Toolbar>
      </AppBar>

      <AppBar position="static"style={{ backgroundColor: 'rgb(143, 206, 185)', border: '2px solid black'  }} className="appBar"> {/* שימוש ב-className כאן */}
        <Toolbar className="toolbar">
         
          <div className="spacer" />
          <Stack direction="row" spacing={2} className="navbar">
            <a href="#">דף בית</a>
            <a href="#">מושגים </a>
            <a href="#">הבורסה </a>
            <a href="#">מדדים </a>
            <a href="#">מסחר יומי </a>
            <a href="#">מסחר לונג</a>
            <a href="#">כלים</a>
            <a href="#">פסיכולוגיה</a>
            <a href="#">אלגוריתם</a>
            <a href="#">קהילה</a>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
