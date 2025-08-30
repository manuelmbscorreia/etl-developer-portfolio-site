const chatBtn = document.getElementById("chat-button");
const chatBox = document.getElementById("chat-box");
const chatSend = document.getElementById("chat-send");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

// 👉 Coloca aqui o teu webhook do n8n
const N8N_WEBHOOK_URL = "https://n8n.manuelcorreia.site/webhook/b4c9bc5f-9adb-47a2-b32a-7210f1394659/chat";

// Abre/fecha chat
chatBtn.onclick = () => {
  chatBox.style.display = (chatBox.style.display === "none" || chatBox.style.display === "") ? "flex" : "none";
};

// Envia mensagem
async function sendMessage() {
  const msg = chatInput.value.trim();
  if (!msg) return;

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
}

chatSend.onclick = sendMessage;
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
