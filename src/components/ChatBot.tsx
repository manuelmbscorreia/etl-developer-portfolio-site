import React from 'react';

const N8N_WEBHOOK_URL = 'https://n8n.manuelcorreia.site/webhook/1e700aff-cb0f-40ac-841a-803601ee040b/chat';

const ChatBot = () => {
  React.useEffect(() => {
    // Função para enviar mensagem
    const sendMessage = async () => {
      const chatInput = document.querySelector(".chat-input") as HTMLInputElement;
      const chatMessages = document.querySelector(".chat-messages");
      const msg = chatInput?.value.trim();
      if (!msg || !chatMessages) return;

      console.log('Enviando mensagem:', msg, 'para:', N8N_WEBHOOK_URL);

      // Mostra mensagem do utilizador
      const userMsg = document.createElement("div");
      userMsg.textContent = msg;
      userMsg.className = "chat-message-user";
      chatMessages.appendChild(userMsg);

      chatInput.value = "";
      chatMessages.scrollTop = chatMessages.scrollHeight;

      try {
        // Envia para o webhook
        const response = await fetch(N8N_WEBHOOK_URL, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({ message: msg })
        });

        console.log('Resposta do webhook:', response.status, response.statusText);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Dados recebidos:', data);

        // Mostra resposta do bot
        const botMsg = document.createElement("div");
        botMsg.textContent = data.reply || data.message || JSON.stringify(data);
        botMsg.className = "chat-message-bot";
        chatMessages.appendChild(botMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;

      } catch (error) {
        console.error('Erro no chat:', error);
        const errMsg = document.createElement("div");
        errMsg.textContent = `⚠️ Erro ao contactar o bot: ${error.message}`;
        errMsg.className = "chat-message-error";
        chatMessages.appendChild(errMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
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
            const welcomeMsg = document.createElement("div");
            welcomeMsg.textContent = "Hi there! 👋 My name is TARS, what question do you have about Manuel's career?";
            welcomeMsg.className = "chat-message-bot";
            chatMessages.appendChild(welcomeMsg);
          }
        }
      };
    }

    if (chatSend) {
      chatSend.onclick = sendMessage;
    }

    if (chatInput) {
      chatInput.addEventListener("keypress", (e: KeyboardEvent) => {
        if (e.key === "Enter") {
          e.preventDefault();
          sendMessage();
        }
      });
    }
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