import React from 'react';

function ChatBox({ messages }) {
  return (
    <div className='p-4 max-h-80 overflow-y-auto bg-chatBackground'>
      {messages.map((msg, index) => (
        <div key={index} className={`p-2 rounded-lg ${msg.isBot ? 'bg-botMessage' : 'bg-userMessage'}`}>{msg.text}</div>
      ))}
    </div>
  );
}

export default ChatBox;