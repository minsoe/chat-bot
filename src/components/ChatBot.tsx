import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mantine/core';
import { getConversation, sendMessage, deleteConversation } from '../api/conversation';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import '../styles/App.css';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getConversation()
      .then(response => setMessages(response.data))
      .catch(error => console.error('Error fetching conversation:', error));
  }, []);

  const handleSendMessage = (message: string) => {
    setLoading(true);
    if (message.trim()) {
      sendMessage(message)
        .then(response => {
          setMessages([...messages, response.data]);
        })
        .finally(() => setLoading(false))
        .catch(error => console.error('Error sending message:', error));
    }
  };

  const handleDeleteConversation = () => {
    setLoading(true);
    deleteConversation()
      .then(() => setMessages([]))
      .finally(() => setLoading(false))
      .catch(error => console.error('Error deleting conversation:', error));
  };

  return (
    <Box className="app-container">
      <Button color='red' className="new-button" onClick={handleDeleteConversation}>New</Button>
      <Box className='spacer'/>
      <MessageList messages={messages}  />
      <MessageInput loading={loading} sendMessage={handleSendMessage} />    
    </Box>
  );
};

export default ChatBot;
