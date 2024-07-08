import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Box, Dialog, DialogTitle, DialogContent, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

const Message = ({ message, onLike }) => {
  const [open, setOpen] = useState(false);

  const handleLike = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/messages/${message._id}/like`, { userId: message.user.id });
      onLike(message._id, response.data.likes); // עדכון מספר הלייקים לאחר קבלת תגובת השרת
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card variant="outlined" sx={{ margin: '20px 0', maxWidth: 600 }}>
      <CardContent>
        <Typography variant="h6">
          <strong>{message.user.name}</strong> {new Date(message.timestamp).toLocaleString()}
        </Typography>
        <Typography variant="body1" sx={{ margin: '10px 0' }}>
          {message.content}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="primary" onClick={handleLike}>
            Like ({message.likes})
          </Button>
          <Button variant="text" color="primary" onClick={handleClickOpen}>
            View Likes
          </Button>
        </Box>
      </CardContent>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Likes</DialogTitle>
        <DialogContent>
          <List>
            {message.likedBy && message.likedBy.map((user) => (  // בדיקה שהמערך likedBy מוגדר
              <ListItem key={user._id}>
                <ListItemAvatar>
                  <Avatar src={`http://localhost:5000${user.profilePic}`} alt={user.name} />
                </ListItemAvatar>
                <ListItemText primary={user.name} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default Message;
