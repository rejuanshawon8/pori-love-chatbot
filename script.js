<script>
    const chatbox = document.getElementById('chatbox');
    const api_token = "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";
    let lastBotReply = "";
    let voiceOn = false; // Voice is off by default

    function appendMessage(role, message, isTyping = false) {
      const p = document.createElement('p');
      p.innerHTML = `<strong>${role}:</strong> ${message}`;
      if (isTyping) p.classList.add('typing');
      chatbox.appendChild(p);
      chatbox.scrollTop = chatbox.scrollHeight;
      return p;
    }

    function speak(text) {
      if (!voiceOn || !window.speechSynthesis) return;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'bn-BD';
      window.speechSynthesis.speak(utterance);
    }

    async function sendMessage() {
      const input = document.getElementById('userInput');
      const message = input.value.trim();
      if (!message) return;

      appendMessage("🧑‍💻 You", message);
      input.value = "";

      const typingMsg = appendMessage("💬 PoriGPT", "Typing... 🧠", true);

      try {
        const response = await fetch("https://api-inference.huggingface.co/models/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${api_token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ inputs: message })
        });

        const data = await response.json();
        typingMsg.remove();

        let botReply = "Pori kichu bujhlo na jaanu, abar bolo na 🥺";

        if (data.generated_text) {
          botReply = data.generated_text;
        } else if (data.error) {
          botReply = "Server busy, pori abar chesta korbe 😔";
        }

        if (botReply !== lastBotReply) {
          appendMessage("💬 PoriGPT", botReply);
          speak(botReply);
          lastBotReply = botReply;
        }

      } catch (error) {
        typingMsg.remove();
        const errorMsg = "Network error hoyeche, janu 🥺 abar try koro.";
        if (errorMsg !== lastBotReply) {
          appendMessage("💬 PoriGPT", errorMsg);
          lastBotReply = errorMsg;
        }
      }
    }

    // Voice toggle shortcut (optional)
    document.addEventListener('keydown', function (e) {
      if (e.key === 'v') {
        voiceOn = !voiceOn;
        alert("Voice " + (voiceOn ? "ON" : "OFF") + " holo jaanu ❤️");
      }
    });
  </script>
