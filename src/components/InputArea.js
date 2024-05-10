import React, { useState } from 'react';

function InputArea({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex p-4'>
      <input
        type='text'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='flex-1 p-2 border-2 border-gray-300'
      />
      <button type='submit' className='p-2 bg-blue-500 text-white'>
        Send
      </button>
    </form>
  );
}

export default InputArea;