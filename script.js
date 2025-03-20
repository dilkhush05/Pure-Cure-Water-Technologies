
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Smooth scrolling for navigation links

const links = document.querySelectorAll(".navbar a");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const id = link.getAttribute("href").substring(1);
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: "smooth",
        });
    });
});




function toggleChat() {
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.style.display = chatContainer.style.display === 'flex' ? 'none' : 'flex';

    // Auto-focus input when chat opens
    if (chatContainer.style.display === 'flex') {
        document.getElementById('user-input').focus();
    }
}

// Press Enter to send message
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message === '') return;

    // Append User Message
    appendMessage('user', message);
    userInput.value = '';

    // Simulate AI Response
    setTimeout(() => {
        const botReply = generateAIResponse(message);
        appendMessage('bot', botReply);
    }, 1000);
}

function appendMessage(sender, text) {
    const chatBody = document.getElementById('chat-body');
    const messageDiv = document.createElement('p');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = text;
    chatBody.appendChild(messageDiv);

    // Auto Scroll to Bottom
    chatBody.scrollTop = chatBody.scrollHeight;
}

function generateAIResponse(userMessage) {
    const responses = {
        "hi": ["Hello! How can I assist you?", "Hey there!", "Hi! What do you need help with? 😊"],
        "hello": ["Hey! Need any help?", "Hello! How's your day?", "Hi there! 😊"],
        "who are you?": ["I'm your AI assistant! 😊", "I'm a chatbot here to help you!", "You can call me your virtual assistant!"],
        "bye": ["Goodbye! Have a great day! 👋", "See you later! 😊", "Bye! Take care!"]
    };

    const lowerMessage = userMessage.toLowerCase();
    const possibleResponses = responses[lowerMessage] || ["I'm not sure about that. Can you rephrase?"];

    return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
}
