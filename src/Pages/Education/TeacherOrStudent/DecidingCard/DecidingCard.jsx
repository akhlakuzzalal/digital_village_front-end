import React from 'react';

const DecidingCard = ({ icon, name }) => {
  return (
    <div className="flex items-center space-x-4 border-4 border-warning hover:border-cyan-500 p-4 rounded-xl hover:bg-dark hover:text-white transition-colors duration-300">
      <h1>{icon}</h1>
      <p className="">Join As A {name}</p>
    </div>
  );
};

export default DecidingCard;
