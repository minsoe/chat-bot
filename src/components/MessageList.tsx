import { useState, useEffect, useRef } from 'react';
import { ScrollArea, Stack, Box } from '@mantine/core';
import '../styles/App.css';

interface MessageListProps {
  messages: { role: string; content: string }[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'auto' });
    }
  }, [messages]);

  return (
    <ScrollArea className='scorll-area' viewportRef={scrollAreaRef}>
        <Stack justify="flex-end" className='message-stack'>
          {messages.map((message, index) => (
            <Box
            key={index}
            className={`message-bubble ${message.role}`}
            >
              {message.content}
            </Box>
          ))}
        </Stack>
      </ScrollArea>
  );
};

export default MessageList;
