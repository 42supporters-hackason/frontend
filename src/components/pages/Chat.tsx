import React from "react";

import "./ChatRoom.css";
import { useChat } from "../../hooks/useChat";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import styled from "styled-components";

export const Chat = (props: any) => {
  const { roomId } = useParams<string>();
  const { messages, sendMessage } = useChat(Number(roomId));
  const [newMessage, setNewMessage] = React.useState("");
  const navigate = useNavigate();

  const handleNewMessageChange = (event: any) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  const onClickBackHome = () => {
    navigate("/home");
  };

  return (
    <>
      <Grid container>
        <Grid xs={10}>
          <div className="chat-room-container">
            <h1 className="room-name">Room: {roomId}</h1>
            <div className="messages-container">
              <ol className="messages-list">
                {messages.map((message, i) => (
                  <li
                    key={i}
                    className={`message-item ${
                      message.ownedByCurrentUser
                        ? "my-message"
                        : "received-message"
                    }`}
                  >
                    {message.body}
                  </li>
                ))}
              </ol>
            </div>
            <textarea
              value={newMessage}
              onChange={handleNewMessageChange}
              placeholder="Write message..."
              className="new-message-input-field"
            />
            <button onClick={handleSendMessage} className="send-message-button">
              Send
            </button>
          </div>
        </Grid>
        <Grid xs={2}>
          <SButton onClick={onClickBackHome}>Back To Home</SButton>
        </Grid>
      </Grid>
    </>
  );
};

const SButton = styled(Button)`
  margin-top: 640px;
  margin-bottom: 25px;
  background-color: #2abca7;
  padding: 12px 45px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #2abca7;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  display: inline-block;
  cursor: pointer;
  width: 100%;
  color: #fff;
  &:hover {
    background-color: #5fdecc;
  }
`;
