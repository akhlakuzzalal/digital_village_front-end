import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from './ActionProvider';
import config from './config';
import MessageParser from './MessageParser';
const ChatBot = () => {
  return (
    <div
      style={{
        textAlign: 'center',

        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '500px' }} className="bg-white px-32">
        <Chatbot
          className="px-20 py-10"
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
};

export default ChatBot;
