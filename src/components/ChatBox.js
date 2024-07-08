import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from './UserContext';

const ChatBox = () => {
  const [content, setContent] = useState('');
  const { user } = useUser();

  useEffect(() => {
    console.log("Loaded user from context:", user);
  }, [user]);

  const sendMessage = async () => {
    if (!user) {
      alert('You must be logged in to send a message.');
      return;
    }


    if (!content) return;
    try {
      
      const response = await axios.post('http://localhost:5000/messages', {
        userId: user.id,  // עדכון ל-userId
        content,
      });

      console.log("Response from server:", response.data);

      setContent('');
    } catch (err) {
      console.error("Error sending message:", err.response ? err.response.data : err);
    }
  };

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your message..."
      ></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;
