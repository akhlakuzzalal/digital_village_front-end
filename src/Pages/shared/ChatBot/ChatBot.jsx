import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import img from '../../../assets/events/message.png';
import ActionProvider from './ActionProvider';
import config from './config';
import MessageParser from './MessageParser';

const ChatBot = () => {
  return (
    <>
      <div className="mx-auto py-5">
        <h1 className="text-center">Conversation With us </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem
          distinctio <br />
          aspernatur tenetur natus consequatur hic impedit voluptatibus nobis
          possimus!
        </p>
      </div>
      <div className="lg:flex">
        <div>
          <img className="h-[500px] mt-[150px]" src={img} alt="" />
        </div>
        <div
          className="ml-[200px]"
          style={{
            textAlign: 'center',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="bg-white  ">
            <Chatbot
              className=""
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
