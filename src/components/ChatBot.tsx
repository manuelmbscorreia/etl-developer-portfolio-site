import React from 'react';

const N8N_WEBHOOK_URL = 'https://n8n.manuelcorreia.site/webhook/1e700aff-cb0f-40ac-841a-803601ee040b/chat';

const ChatBot = () => {
  React.useEffect(() => {
    // Função para adicionar mensagem
    const addMessage = (text: string, type: 'user' | 'bot') => {
      const chatMessages = document.querySelector(".chat-messages");
      if (!chatMessages) return;
      
      const messageDiv = document.createElement("div");
      messageDiv.className = `chat-message-${type}`;
      messageDiv.textContent = text;
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    // Função para enviar mensagem
    const sendMessage = async () => {
      const chatInput = document.querySelector(".chat-input") as HTMLInputElement;
      const message = chatInput?.value.trim();
      if (!message) return;

      // Add user message to chat
      addMessage(message, 'user');
      chatInput.value = '';

      try {
        // Envia para o webhook
        const response = await fetch(N8N_WEBHOOK_URL, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: message // apenas a mensagem - sem metadata
          })
        });

        const data = await response.json();
        
        // Extrai o texto da resposta
        const botResponse = data.text || data.message || "Sorry, I didn't understand that.";
        addMessage(botResponse, 'bot');

      } catch (error) {
        console.error('Error:', error);
        addMessage('Desculpe, ocorreu um erro. Tente novamente.', 'bot');
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        sendMessage();
      }
    };

    // Event listeners
    const chatBtn = document.querySelector(".chat-button") as HTMLElement;
    const chatBox = document.querySelector(".chat-box") as HTMLElement;
    const chatSend = document.querySelector(".chat-send-btn") as HTMLElement;
    const chatInput = document.querySelector(".chat-input") as HTMLInputElement;

    if (chatBtn && chatBox) {
      chatBtn.onclick = () => {
        const isVisible = chatBox.style.display === "flex";
        chatBox.style.display = isVisible ? "none" : "flex";
        
        // Adicionar mensagem inicial se for a primeira vez
        if (!isVisible) {
          const chatMessages = document.querySelector(".chat-messages");
          if (chatMessages && chatMessages.children.length === 0) {
            addMessage("Hi there! 👋 My name is TARS, what question do you have about Manuel's career?", 'bot');
          }
        }
      };
    }

    if (chatSend) {
      chatSend.onclick = sendMessage;
    }

    if (chatInput) {
      chatInput.addEventListener("keypress", handleKeyPress);
    }

    // Close chat when clicking outside
    const handleClickOutside = (event: Event) => {
      const chatContainer = document.querySelector('.chat-box') as HTMLElement;
      const target = event.target as HTMLElement;
      if (chatContainer && !chatContainer.contains(target) && !target.closest('.chat-button')) {
        chatContainer.style.display = 'none';
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Cleanup event listeners
    return () => {
      document.removeEventListener('click', handleClickOutside);
      if (chatInput) {
        chatInput.removeEventListener("keypress", handleKeyPress);
      }
    };
  }, []);

  return (
    <>
      <div className="chat-button">💬</div>
      <div className="chat-box" style={{ display: 'none' }}>
        <div className="chat-header">Chat com TARS</div>
        <div className="chat-messages"></div>
        <div className="chat-input-container">
          <input className="chat-input" type="text" placeholder="Digite sua mensagem..." />
          <button className="chat-send-btn">➤</button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;