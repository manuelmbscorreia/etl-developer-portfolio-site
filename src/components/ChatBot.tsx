import React from 'react';

const N8N_WEBHOOK_URL = 'https://n8n.manuelcorreia.site/webhook/1e700aff-cb0f-40ac-841a-803601ee040b/chat';

const ChatBot = () => {
  React.useEffect(() => {
    // Função para enviar mensagem
    const sendMessage = async () => {
      const chatInput = document.getElementById("chat-input") as HTMLInputElement;
      const chatMessages = document.getElementById("chat-messages");
      const msg = chatInput?.value.trim();
      if (!msg || !chatMessages) return;

      console.log('Enviando mensagem:', msg, 'para:', N8N_WEBHOOK_URL);

      // Mostra mensagem do utilizador
      const userMsg = document.createElement("p");
      userMsg.textContent = msg;
      userMsg.className = "user";
      userMsg.style.alignSelf = "flex-end";
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
        const botMsg = document.createElement("p");
        botMsg.textContent = data.reply || data.message || JSON.stringify(data);
        botMsg.className = "bot";
        chatMessages.appendChild(botMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;

      } catch (error) {
        console.error('Erro no chat:', error);
        const errMsg = document.createElement("p");
        errMsg.textContent = `⚠️ Erro ao contactar o bot: ${error.message}`;
        errMsg.style.color = "red";
        chatMessages.appendChild(errMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    };

    // Event listeners
    const chatBtn = document.getElementById("chat-button");
    const chatBox = document.getElementById("chat-box");
    const chatSend = document.getElementById("chat-send");
    const chatInput = document.getElementById("chat-input");

    if (chatBtn && chatBox) {
      chatBtn.onclick = () => {
        const isVisible = chatBox.style.display === "flex";
        chatBox.style.display = isVisible ? "none" : "flex";
        
        // Adicionar mensagem inicial se for a primeira vez
        if (!isVisible) {
          const chatMessages = document.getElementById("chat-messages");
          if (chatMessages && chatMessages.children.length === 0) {
            const welcomeMsg = document.createElement("p");
            welcomeMsg.textContent = "Hi there! 👋 My name is TARS, what question do you have about Manuel's career?";
            welcomeMsg.className = "bot";
            chatMessages.appendChild(welcomeMsg);
          }
        }
      };
    }

    if (chatSend) {
      chatSend.onclick = sendMessage;
    }

    if (chatInput) {
      chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          sendMessage();
        }
      });
    }
  }, []);

  return (
    <>
      <div id="chat-button">💬</div>
      <div id="chat-box" style={{ display: 'none' }} className="chat-container">
        <div id="chat-header">Chat com TARS</div>
        <div id="chat-messages"></div>
        <div id="chat-input-container">
          <input id="chat-input" type="text" placeholder="Digite sua mensagem..." />
          <button id="chat-send">➤</button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;