import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Message from './Message';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/messages');
        console.log(response.data)
        setMessages(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMessages();
  }, []);

  const handleLike = (messageId, newLikes) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message._id === messageId ? { ...message, likes: newLikes } : message
      )
    );
  };

  return (
    <div>
      {messages.map((message) => (
        <Message key={message._id} message={message} onLike={handleLike} />
      ))}
    </div>
  );
};

export default MessageList;
