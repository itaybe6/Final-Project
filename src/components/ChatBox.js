import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from './UserContext';
import { TextField, Button, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const ChatBox = () => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Day Trading');
  const { user } = useUser();

  const sendMessage = async () => {
    if (!content || !category) return;
    try {
      const response = await axios.post('http://localhost:5000/messages', {
        userId: user.id,
        content,
        category
      });
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
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Category"
        >
          <MenuItem value="Day Trading">Day Trading</MenuItem>
          <MenuItem value="Long-Term Investing">Long-Term Investing</MenuItem>
          <MenuItem value="Beginners in the Stock Market">Beginners in the Stock Market</MenuItem>
          <MenuItem value="Trading Psychology">Trading Psychology</MenuItem>
          <MenuItem value="Trading Tools and Technologies">Trading Tools and Technologies</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={sendMessage}>
        Send
      </Button>
    </Box>
  );
};

export default ChatBox;
