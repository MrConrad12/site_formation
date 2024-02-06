
function sendMessage() {
    var messageInput = document.getElementById('message');
    var messageText = messageInput.value.trim();

    if (messageText !== '') {
        var discussion = document.querySelector('.discuss');
        discussion.innerHTML += '<p class="mychat">' + messageText + '</p>';

        // Ajoutez ici la logique de votre chatbot pour traiter la réponse

        messageInput.value = '';
        discussion.scrollTop = discussion.scrollHeight;
    }
}

function showChat() {
    var chatbot = document.getElementById("chat-box");
    chatbot.style.display = block;
}
