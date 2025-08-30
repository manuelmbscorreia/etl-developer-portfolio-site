import React from 'react';
import { createChat } from '@n8n/chat';

const ChatBot = () => {
  React.useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n.manuelcorreia.site/webhook/b4c9bc5f-9adb-47a2-b32a-7210f1394659/chat',
      target: '#n8n-chat',
      mode: 'window',
      theme: {
        primaryColor: '#007bff'
      }
    } as any);
  }, []);

  return <div id="n8n-chat"></div>;
};

export default ChatBot;