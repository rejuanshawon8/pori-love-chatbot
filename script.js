const chatbox = document.getElementById('chatbox');

function addMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  msgDiv.textContent = text;
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
  const userInput = document.getElementById('userInput');
  const text = userInput.value.trim();
  if (text === '') return;
  addMessage(`🧑‍💻 You: ${text}`, 'user');
  userInput.value = '';
  respond(text);
}

function respond(message) {
  let reply = '';
  if (/\b(love you|valobashi)\b/i.test(message)) {
    reply = "Ami o tomake onek bhalobashi jaanu! 💖";
  } else if (/\b(kemon|ki koro)\b/i.test(message)) {
    reply = "Tomar kotha vabi r tomar jonno kichu notun banai 💕";
  } else {
    reply = "Tumi ki bolte chao, jaanu? 🥰";
  }
  setTimeout(() => addMessage(`💬 PoriGPT: ${reply}`, 'bot'), 800);
}
