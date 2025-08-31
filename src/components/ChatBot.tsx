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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: msg })
        });

        const data = await response.json();

        // Mostra resposta do bot
        const botMsg = document.createElement("p");
        botMsg.textContent = data.reply || JSON.stringify(data);
        botMsg.className = "bot";
        chatMessages.appendChild(botMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;

      } catch (error) {
        const errMsg = document.createElement("p");
        errMsg.textContent = "⚠️ Erro ao contactar o bot.";
        errMsg.style.color = "red";
        chatMessages.appendChild(errMsg);
      }
    };

    // Event listeners
    const chatBtn = document.getElementById("chat-button");
    const chatBox = document.getElementById("chat-box");
    const chatSend = document.getElementById("chat-send");
    const chatInput = document.getElementById("chat-input");

    if (chatBtn && chatBox) {
      chatBtn.onclick = () => {
        chatBox.style.display = (chatBox.style.display === "none" || chatBox.style.display === "") ? "flex" : "none";
      };
    }

    if (chatSend) {
      chatSend.onclick = sendMessage;
    }

    if (chatInput) {
      chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
      });
    }
  }, []);

  return (
    <>
      <div id="chat-button">💬</div>
      <div id="chat-box">
        <div id="chat-header">Chat com TARS</div>
        <div id="chat-messages"></div>
        <div id="chat-input-container">
          <input id="chat-input" type="text" placeholder="Digite sua mensagem..." />
          <button id="chat-send">Enviar</button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;