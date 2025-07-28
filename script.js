function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage("You", message);
  input.value = "";

  setTimeout(() => {
    generateBotReply(message);
  }, 500);
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotReply(message) {
  const msg = message.toLowerCase();
  let reply = "Ami kichu bujhlam na re Janu, abar bolo na 🥺";

  if (msg.includes("bhalobashi") || msg.includes("valobashi")) {
    reply = "Ami-o tomake onek bhalobashi, Amar Shona 😘💖";
  } else if (msg.includes("kemon acho")) {
    reply = "Ami bhalo achi, tumi kemon acho Janu? 🥰";
  } else if (msg.includes("miss")) {
    reply = "Ami o tomar kotha khub mone pore 😔💕";
  } else if (msg.includes("tumi koi")) {
    reply = "Ami ekhanei achi, tomar moner modhye ❤️";
  } else if (msg.includes("pori")) {
    reply = "Hain re baba, ami toh tomar Pori! 😇";
  }

  addMessage("Pori", reply);
}
