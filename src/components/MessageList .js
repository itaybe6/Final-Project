import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, List, Drawer, Select, MenuItem } from '@mui/material';
import CommunityButton from './CommunityButton';
import Message from './Message';
import ChatBox from './ChatBox.js';

const categories = [
  { value: 'Day-Trading', label: 'מסחר יומי' },
  { value: 'Long-Term-Investing', label: 'השקעה לטווח ארוך' },
  { value: 'Beginners', label: 'מתחילים' },
  { value: 'Other', label: 'אחר' },
];

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [category, setCategory] = useState("Day-Trading");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetchMessages(category);
  }, [category]);

  const fetchMessages = async (category) => {
    try {
      const response = await axios.get(`http://localhost:5000/messages/category/${category}`);
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setCategory(newCategory);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <CommunityButton onClick={toggleDrawer} drawerOpen={drawerOpen} />
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <Box sx={{ width: 300, padding: 2 }}>
          <Select
            value={category}
            onChange={handleCategoryChange}
            fullWidth
            sx={{ mb: 2 }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>{cat.label}</MenuItem>
            ))}
          </Select>
          <Typography variant="h6" gutterBottom>
            כתוב את ההודעה שלך
          </Typography>
          <ChatBox category={category} addMessage={addMessage} /> {/* העברת הפונקציה ל-ChatBox */}
          <List>
            {messages.map((message) => (
              <Message key={message._id} message={message} />
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MessageList;
