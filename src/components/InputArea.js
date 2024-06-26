import React, { useState } from 'react';
import axios from 'axios';

function InputArea({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex p-4 bg-white'>
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='flex-1 p-2 border-2 border-gray-300 rounded-lg'
      />
      <button type='submit' className='p-2 bg-blue-500 text-white rounded-lg'>
        Send
      </button>
    </form>
  );
}

export default InputArea;