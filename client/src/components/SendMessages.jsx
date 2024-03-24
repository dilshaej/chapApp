// components/SendMessages.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../Redux/actions";

const SendMessages = ({ socket }) => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const sendMessage = () => {
    if (message.trim() !== "") {
      dispatch(addMessage(message)); // Dispatch action to add message to Redux store
      socket.emit("send_message", { room: "chat_room", message }); // Emit "send_message" event to Socket.IO server
      setMessage("");
    }
  };

  return (
    <div className="send-message d-flex justify-content-between mb-4">
      <input
        className="form-control"
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="btn btn-secondary ms-2" onClick={sendMessage}>
      <i className="fa-solid fa-paper-plane"></i>
      </button>
    </div>
  );
};

export default SendMessages;
