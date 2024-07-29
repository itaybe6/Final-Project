import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Box, Dialog, DialogTitle, DialogContent, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { useUser } from './UserContext';

const Message = ({ message }) => {
  const [open, setOpen] = useState(false);
  const [likes, setLikes] = useState([]);
  const { user } = useUser();
  
  const handleLike = async () => {
    if (!user) {
      console.error("User is not logged in.");
      return;
    }
  
    try {
      const response = await axios.post(`http://localhost:5000/messages/${message._id}/like`, {
        userId: user.id,
        name: user.name,
        profilePic: user.profilePic // שדה חדש לתמונת הפרופיל
      });
      console.log("Liked by users (response):", response.data.likedBy);
    } catch (err) {
      console.error("Error sending like request:", err.response ? err.response.data : err);
    }
  }

  const handleClickOpen = async () => {
    setOpen(true);
    try {
      const response = await axios.get(`http://localhost:5000/messages/${message._id}/likes`);
      setLikes(response.data);
    } catch (err) {
      console.error("Error fetching likes:", err.response ? err.response.data : err);
    }
    console.log("Liked by users:", likes);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card variant="outlined" sx={{ margin: '20px 0', maxWidth: 600, borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', direction: 'rtl' }}>
      <CardContent sx={{ direction: 'rtl' }}>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography variant="h6" color="textPrimary" sx={{ fontWeight: 'bold' }}>
            {message.name || 'Unknown User'}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {new Date(message.timestamp).toLocaleString()}
          </Typography>
        </Box>
        <Typography variant="body1" color="textPrimary" sx={{ margin: '10px 0', textAlign: 'right' }}>
          {message.content}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
          <Button variant="contained" color="primary" onClick={handleLike}>
            Like ({message.likes})
          </Button>
          <Button variant="text" color="primary" onClick={handleClickOpen}>
            View Likes
          </Button>
        </Box>
      </CardContent>

      <Dialog open={open} onClose={handleClose} sx={{ direction: 'rtl' }}>
        <DialogTitle>Likes</DialogTitle>
        <DialogContent>
          <List>
            {likes.map((user) => (
              <ListItem key={user.userId}>
                <ListItemAvatar>
                  <Avatar src={user.profilePic ? `http://localhost:5000${user.profilePic}` : ''} alt={user.name} />
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
