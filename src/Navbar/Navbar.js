
import { Stack } from '@mui/material';
import '../Style/Navbar.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
function Navbar() {
 


  return (
    <div>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Typography variant="h6" component="div">
            שוק ההון למתחילים
          </Typography>
          <div className="spacer" />
          <Stack direction="row" spacing={2} className="navbar">
            <a href="#">דף בית</a>
            <div className="dropdown">
              <a href="#">מושגים </a>
              <div className="dropdown-content">
                <a href="#">מניה</a>
                <a href="#">נרות </a>
                <a href="#">מסחר מוקדם</a>
                <a href="#">מסחר מאוחר</a>
                <a href="#"> בחן את עצמך</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="#">הבורסה </a>
              <div className="dropdown-content">
                <a href="#">בורסת ישראל</a>
                <a href="#">בורסה אמריקאית </a>
                <a href="#">בחן את עצמך  </a>
              </div>
            </div>
            <div className="dropdown">
              <a href="#">מדדים </a>
              <div className="dropdown-content">
                <a href="#">מדדים ברחבי העולם </a>
                <a href="#">מדדים בישראל  </a>
              
              </div>
            </div>
            <div className="dropdown">
              <a href="#">מסחר יומי </a>
              <div className="dropdown-content">
                <a href="#">ניתוח טכני   </a>
                <a href="#">ניתוח גרפי   </a>
                <a href="#">בחן את עצמך   </a>
              
              </div>
            </div>

            <a href="#">מדדים</a>
            <a href="#">מסחר יומי</a>
            <a href="#">מסחר לונג</a>
            <a href="#">כלים</a>
            <a href="#">פסיכולוגיה</a>
            <a href="#">קהילה</a>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
