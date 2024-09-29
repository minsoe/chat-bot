import React, { useState } from 'react';
import { TextInput, ActionIcon, Loader } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import '@mantine/core/styles.css';

interface MessageInputProps {
  loading: boolean;
  sendMessage: (content: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ loading, sendMessage }) => {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (!loading && message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
      <TextInput
        className='message-input'
        value={message}
        onChange={handleChange}
        radius="xl"
        size="md"
        placeholder="Message"
        rightSectionWidth={42}
        rightSection={
          <ActionIcon size={32} radius="xl" variant="filled" onClick={handleSend}>
            { loading? <Loader size="26" color='white'/> : <IconArrowRight stroke={1.5} /> }
          </ActionIcon>
      }
      />
    
  );
};

export default MessageInput;
