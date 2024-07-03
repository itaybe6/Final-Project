import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from './UserContext';

const ChatBox = ({ onMessageSent }) => {
  const [content, setContent] = useState('');
  const { user } = useUser();

  const sendMessage = async () => {
    if (!content) return;
    try {
      const response = await axios.post('http://localhost:5000/messages', {
        userId: user._id,
        content,
      });
      setContent('');
      onMessageSent(response.data); // עדכון רשימת ההודעות
    } catch (err) {
      console.error(err);
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
