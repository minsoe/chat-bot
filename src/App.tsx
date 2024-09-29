import React from 'react';
import { MantineProvider } from '@mantine/core';
import ChatBot from './components/ChatBot';


const App: React.FC = () => {
  return (
    <MantineProvider>
      <ChatBot />
    </MantineProvider>
  );
};

export default App;
