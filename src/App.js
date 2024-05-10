import logo from './logo.svg';
import './App.css';
// Start of ChatBox and InputArea import
import ChatBox from './components/ChatBox';
import InputArea from './components/InputArea';
// End of ChatBox and InputArea import

// Start of App component modification
function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, { text: newMessage, isBot: false }]);
    // Placeholder for sending message to backend
  };

  return (
    <div className='App'>
      <ChatBox messages={messages} />
      <InputArea onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
// End of App component modification