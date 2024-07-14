import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Message from './Message';
import { Drawer, List, ListItem, ListItemText, Box, Typography, IconButton, Toolbar, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../Style/MessageList.css'; // ייבוא קובץ ה-CSS

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/messages');
        setMessages(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    const fetchMessagesByCategory = async () => {
      try {
        const response = selectedCategory === 'All'
          ? await axios.get('http://localhost:5000/messages')
          : await axios.get(`http://localhost:5000/messages/category/${selectedCategory}`);
        setMessages(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessagesByCategory();
  }, [selectedCategory]);

  const handleLike = (messageId, newLikes, likedBy) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message._id === messageId ? { ...message, likes: newLikes, likedBy } : message
      )
    );
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={() => setSelectedCategory('All')}>
          <ListItemText primary="All" />
        </ListItem>
        <ListItem button onClick={() => setSelectedCategory('Day Trading')}>
          <ListItemText primary="Day Trading" />
        </ListItem>
        <ListItem button onClick={() => setSelectedCategory('Long-Term Investing')}>
          <ListItemText primary="Long-Term Investing" />
        </ListItem>
        <ListItem button onClick={() => setSelectedCategory('Beginners in the Stock Market')}>
          <ListItemText primary="Beginners in the Stock Market" />
        </ListItem>
        <ListItem button onClick={() => setSelectedCategory('Trading Psychology')}>
          <ListItemText primary="Trading Psychology" />
        </ListItem>
        <ListItem button onClick={() => setSelectedCategory('Trading Tools and Technologies')}>
          <ListItemText primary="Trading Tools and Technologies" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {selectedCategory} Messages
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          {selectedCategory} Messages
        </Typography>
        {messages.map((message) => (
          <Message key={message._id} message={message} onLike={handleLike} />
        ))}
      </Box>
    </Box>
  );
};

export default MessageList;
