
function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage("user", message);
  input.value = "";

  setTimeout(() => {
    const reply = getBotReply(message);
    addMessage("bot", reply);
  }, 500);
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.className = sender === "user" ? "user-msg" : "bot-msg";
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hi there! Where would you like to travel today?";
  } else if (msg.includes("airport")) {
    return "Taxi to the airport booked. 🚖 ✈️";
  } else if (msg.includes("city center") || msg.includes("downtown")) {
    return "Taxi to the city center is on its way!";
  } else if (msg.includes("thank")) {
    return "You're welcome! Have a safe journey!";
  } else {
    return "I'm here to help you book a taxi. Just tell me your destination!";
  }
}
