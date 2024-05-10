import React, { useState } from 'react';
import axios from 'axios';

function InputArea({ onSendMessage }) {
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios.post(process.env.REACT_APP_CHATGPT_CLONE_BE_URL + '/messages', { message })
      .then(response => {
        onSendMessage({ text: message, isBot: false });
        onSendMessage({ text: response.data.reply, isBot: true });
      })
      .catch(error => console.error('Error:', error));
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