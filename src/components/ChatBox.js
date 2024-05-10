import React from 'react';

function ChatBox({ messages }) {
  return (
    <div className='p-4 max-h-80 overflow-y-auto'>
      {messages.map((msg, index) => (
        <div key={index} className={`p-2 ${msg.isBot ? 'bg-blue-100' : 'bg-green-100'}`}>{msg.text}</div>
      ))}
    </div>
  );
}

export default ChatBox;