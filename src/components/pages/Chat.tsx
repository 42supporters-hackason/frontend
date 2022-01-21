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

  messages.map((message) => {
    console.log(message.owndByCurrentUser);
  });

  return (
    <>
      <Grid container>
        <Grid xs={10}>
          <div className="chat-room-container">
            <h1 className="room-name">Room: {roomId}</h1>
            <div className="messages-container">
              <ol className="messages-list">
                {messages.map((message, i) => (
                  <SMessageList key={i} isMyMessage={message.owndByCurrentUser}>
                    {message.body}
                  </SMessageList>
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

type MessageProps = {
  isMyMessage: boolean;
};

const SMessageList = styled.li<MessageProps>`
  width: 55%;
  margin: 8px;
  padding: 12px 8px;
  word-break: break-word;
  border-radius: 4px;
  color: white;
  background-color: ${(props) =>
    props.isMyMessage ? "rgb(0, 132, 255)" : "black"};
  margin: ${(props) => (props.isMyMessage ? "0 0 0 auto" : "0 auto 0 0 ")};
`;

const SButton = styled(Button)`
  margin-top: 610px;
  margin-bottom: 25px;
  background-color: #2abca7;
  -ms-border-radius: 5px;
  padding: 20px 20px;
  -o-border-radius: 5px;
  border-radius: 50%;
  border: 1px solid #2aabbc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  display: block;
  text-align: center;
  cursor: pointer;
  width: 100%;
  color: #fff;
  &:hover {
    background-color: #5fdecc;
  }
`;
