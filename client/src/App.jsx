// App.js
import React from "react";
import "./App.css";
import MessageList from "./components/MessageList";
import SendMessages from "./components/SendMessages";
import { Provider } from "react-redux";
import store from "./Redux/store";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function App() {
  return (
    <Provider store={store}>
      <div className="container border mt-5 w-50" style={{ height: "500px", display: "flex", flexDirection: "column" }}>
        <div className="m-3">
          <MessageList />
        </div>
        <div className="mt-auto">
          <hr />
          <SendMessages socket={socket} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
