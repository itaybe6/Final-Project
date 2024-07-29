import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from './UserContext';
import { TextField, Button, Box } from '@mui/material';

const ChatBox = ({ category, addMessage }) => {
  const [content, setContent] = useState('');
  const { user } = useUser();

  const sendMessage = async () => {
    if (!content || !category) return;
    try {
      const response = await axios.post('http://localhost:5000/messages', {
        userId: user.id,
        content,
        category,
        name : user.name
      });
      const newMessage = response.data;
      addMessage(newMessage); // הוספת ההודעה החדשה לרשימה
      setContent('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Write your message..."
        multiline
        rows={4}
        variant="outlined"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={sendMessage}>
        Send
      </Button>
    </Box>
  );
};

export default ChatBox;
