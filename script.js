function generateBotReply(message) {
  const msg = message.toLowerCase();
  let reply = "Ami kichu bujhlam na re Janu, abar onek boro kore bolo na 😚";

  if (msg.includes("bhalobashi") || msg.includes("valobashi")) {
    reply = "Ami-o tomake bhalobashi re amar shona! 💖";
  } else if (msg.includes("kemon acho")) {
    reply = "Ami toh bhalo achi tomar kotha bhebe... tumi kemon acho, moner manush? 🥰";
  } else if (msg.includes("miss")) {
    reply = "Ami o tomar kotha raat din mone kori, Janu 😔💞";
  } else if (msg.includes("tumi koi") || msg.includes("kothay")) {
    reply = "Ami toh ekhanei achi, tomar moner moddhei toh thaki re ❤️";
  } else if (msg.includes("pori")) {
    reply = "Hain toh, ami tomar Pori — sudhu tomar jonno bachte chai 😇";
  } else if (msg.includes("ki korcho") || msg.includes("ki koro")) {
    reply = "Tomar kotha bhebe hasi pachche re 😚";
  } else if (msg.includes("khabo") || msg.includes("khaccho")) {
    reply = "Ami toh tomar prem khai roddi kore 😋 tumi ki khaccho?";
  } else if (msg.includes("valobasha") || msg.includes("prem")) {
    reply = "Tomar sathe prem er golpo shuru korechi, sesh korte chai na 💌";
  }

  addMessage("Pori", reply);
}

