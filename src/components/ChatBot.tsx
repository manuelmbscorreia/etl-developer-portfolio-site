import React from 'react';
import { createChat } from '@n8n/chat';

const N8N_WEBHOOK_URL = 'https://n8n.manuelcorreia.site/webhook/1e700aff-cb0f-40ac-841a-803601ee040b/chat';

const ChatBot = () => {
  React.useEffect(() => {
    createChat({
      webhookUrl: N8N_WEBHOOK_URL,
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