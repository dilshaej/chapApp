// components/MessageList.jsx
import React from "react";
import { useSelector } from "react-redux";

const MessageList = () => {
  const messages = useSelector((state) => state.messages);

  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className="message">
          {msg}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
