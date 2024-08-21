import React, { useState } from 'react';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSend = () => {
    // Here you would integrate with your AI chatbot API
    const botResponse = "This is where the AI's response would go."; // Placeholder response
    setConversation([...conversation, { user: message, bot: botResponse }]);
    setMessage('');
  };

  return (
    <div className="chatbot-container">
      <h2>Research Assistant Chatbot</h2>
      <div className="conversation">
        {conversation.map((chat, index) => (
          <div key={index}>
            <p><strong>You:</strong> {chat.user}</p>
            <p><strong>Bot:</strong> {chat.bot}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chatbot;
