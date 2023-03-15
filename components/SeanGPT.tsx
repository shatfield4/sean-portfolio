import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const SeanGPT = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ type: 'user' | 'response', content: string }[]>([
    { type: 'response', content: `Hello, I'm Sean. How can I assist you today?` },
  ]);
  const [loading, setLoading] = useState(false);

  const messagesRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setMessages((prevMessages) => [...prevMessages, { type: 'user', content: input }]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('/api/SeanGPT', { chatMessage: input });
      setMessages((prevMessages) => [...prevMessages, { type: 'response', content: response.data.response }]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([{ type: 'response', content: 'Hello, how may I assist you today?' },]);
    setInput('');
  };

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, loading]);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-4xl text-white font-bold leading-tight text-center bg-gray-900">
          <h1 className="mb-10">
            Say Hello to <br /><span className="text-yellow-300">SeanGPT</span>.
          </h1>
      </div>
      <div className="bg-gray-800 rounded-lg px-8 py-6 shadow-md w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-2">Chat with SeanGPT</h1>
        <p className="text-gray-400 mb-4">Powered by OpenAI&apos;s GPT-3.5 Turbo and trained to answer questions as him.</p>
        <div ref={messagesRef} className="flex flex-col gap-4 h-60 overflow-y-auto mb-8 bg-slate-300 p-5 rounded-lg">
          <div className="flex flex-col gap-2">
            {messages.map((message, index) => (
              <div key={`msg-${index}`} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-1/2 p-2 rounded-lg break-words ${message.type === 'user' ? 'bg-blue-600' : 'bg-gray-600'}`}>
                  <span className="font-semibold">{message.type === 'user' ? 'You:' : 'SeanGPT:'}</span> {message.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="p-2 rounded-lg bg-gray-400 text-left animate-pulse">
                  <span className="text-white break-words">•••</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Ask me anything about Sean..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-gray-700 text-white rounded-lg py-2 pl-4 pr-14 w-full outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 text-white bg-blue-600 rounded-lg py-2 px-4 font-medium hover:shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              &#8594;
            </button>
          </div>
          <button
            type="button"
            className="ml-4 text-gray-400 hover:text-white font-medium"
            onClick={handleReset}
          >
            Reset
          </button>
      </form>
      </div>
    </div>
  );
};

export default SeanGPT;
