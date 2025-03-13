let selections = { event: null, type: null, theme: null };

function toggleDropdown(id) {
document.getElementById(id).classList.toggle("active");
}

function selectOption(category, choice) {
selections[category] = choice;
document.querySelector(`#${category}-dropdown .dropdown-toggle`).textContent = choice;
document.getElementById(`${category}-dropdown`).classList.remove("active");
checkCompletion();
}

function checkCompletion() {
if (selections.event && selections.type && selections.theme) {
    document.getElementById("result").style.display = "block";
    document.getElementById("result-text").textContent = `You selected: ${selections.event} | ${selections.type} | ${selections.theme}`;
    document.getElementById("reset-btn").style.display = "block";
    document.getElementById("shop-btn").style.display = "block";
}
}

function resetSelection() {
selections = { event: null, type: null, theme: null };
document.getElementById("result").style.display = "none";
document.getElementById("reset-btn").style.display = "none";
document.getElementById("shop-btn").style.display = "none";
}

function toggleChat() {
let chat = document.getElementById("chat-container");
chat.style.display = (chat.style.display === "block") ? "none" : "block";
}
function goToShop() {
window.location.href = "shop.html"; // Remplace par ton lien
}


document.addEventListener("DOMContentLoaded", function () {
const chatbox = document.getElementById("chatbox");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-button");

function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function chatbotResponse(userInput) {
    const responses = {
        "bonjour": "Bonjour! Comment puis-je vous aider?",
        "comment ça va": "Je vais bien, merci! Et vous?",
        "qui es-tu": "Je suis un chatbot conçu pour vous aider.",
        "au revoir": "Au revoir! Passez une excellente journée!"
    };
    
    userInput = userInput.toLowerCase();
    return responses[userInput] || "Désolé, je ne comprends pas. Pouvez-vous reformuler?";
}

sendButton.addEventListener("click", function () {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        appendMessage("user", userMessage);
        setTimeout(() => {
            const botResponse = chatbotResponse(userMessage);
            appendMessage("bot", botResponse);
        }, 500);
        chatInput.value = "";
    }
});

chatInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendButton.click();
    }
});
});

