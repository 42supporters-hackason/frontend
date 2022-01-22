import React from "react";

import "./ChatRoom.css";
import { useChat } from "../../hooks/useChat";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import styled from "styled-components";
import {
  useChatDriverContext,
  useChatNavigatorContext,
} from "../../providers/ChatUserProvider";
import { UserProfileList } from "../molecules/UserProfileList";

export const Chat = (props: any) => {
  const { roomId } = useParams<string>();
  const { messages, sendMessage } = useChat(Number(roomId));
  const [newMessage, setNewMessage] = React.useState("");
  const navigate = useNavigate();
  const chatNavigator = useChatNavigatorContext();
  const chatDriver = useChatDriverContext();

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
        <Grid xs={8}>
          <div className="all-wrapper">
            <div className="chat-room-container">
              <h2 className="room-name">
                {chatDriver} and {chatNavigator} room
              </h2>
              <div className="messages-container">
                <ol className="messages-list">
                  {messages.map((message, i) => (
                    <SMessageList
                      key={i}
                      isMyMessage={message.owndByCurrentUser}
                    >
                      {message.body}
                    </SMessageList>
                  ))}
                </ol>
              </div>
              <TextButtonContainer>
                <StyledTextField
                  value={newMessage}
                  onChange={handleNewMessageChange}
                  placeholder="Write message..."
                />
                <StyledSendButton
                  variant="contained"
                  onClick={handleSendMessage}
                >
                  Send
                </StyledSendButton>
              </TextButtonContainer>
            </div>
          </div>
        </Grid>
        <Grid xs={4}>
          <CardPosition>
            <Card style={{ width: 375 }}>
              <CardContent>
                <CardCommentBackGround>
                  <UserProfileList
                    title="使える言語"
                    listItemTitle="language (can use)"
                    listItem={["C言語", "Go", "Ruby", "TypeScript"]}
                  />
                  <UserProfileList
                    title="所持しているポイント"
                    listItemTitle="evaluation point"
                    listItem={["5"]}
                  />
                  <UserProfileList
                    title="自己PR"
                    listItemTitle="self promotion"
                    listItem={[
                      "普段はフロントエンドエンジニアとして働いています。 ただ、フルスタックなエンジニアを目指しているので、ぜひバックエンドの知識が豊富な方とmatchingしたいです!!",
                    ]}
                  />
                  <UserProfileList
                    title="Githubのリンク"
                    listItemTitle="github id"
                    listItem={["https://github.com/taisei-13046"]}
                  />
                </CardCommentBackGround>
              </CardContent>
            </Card>
          </CardPosition>
          <SButton onClick={onClickBackHome}>Back To Home</SButton>
        </Grid>
      </Grid>
    </>
  );
};

type MessageProps = {
  isMyMessage: boolean;
};

const CardCommentBackGround = styled.div`
  background-color: #f1f1f2;
  min-height: 350px;
  border-radius: 5px;
  padding: 15px;
`;

const CardPosition = styled.div`
  margin: 20px 100px 10px 50px;
  @media (max-width: 750px) {
    display: none;
  }
`;

const SMessageList = styled.li<MessageProps>`
  width: 40%;
  padding: 12px 8px;
  margin-top: 10px;
  word-break: break-word;
  border-radius: 4px;
  color: ${(props) => (props.isMyMessage ? "white" : "black")};
  background-color: ${(props) =>
    props.isMyMessage ? "rgb(0, 132, 255)" : "white"};
  margin: ${(props) =>
    props.isMyMessage ? "10px 0 0 auto" : "10px auto 0 0 "};
  border: ${(props) => (props.isMyMessage ? "none" : "1px solid #d3d3d3")};
`;

const SButton = styled(Button)`
  margin: 600px auto;
  margin-bottom: 25px;
  background-color: #2abca7;
  -ms-border-radius: 5px;
  padding: 20px 20px;
  @media (min-width: 780px) {
    padding: 30px 20px;
    border-radius: 30px;
    margin: 150px auto;
  }
  -o-border-radius: 5px;
  border-radius: 50%;
  border: 1px solid #2aabbc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  display: block;
  text-align: center;
  cursor: pointer;
  width: 50%;
  color: #fff;
  &:hover {
    background-color: #5fdecc;
  }
`;

const StyledSendButton = styled(Button)`
  width: 20%;
  margin-right: 20px;
`;

const StyledTextField = styled(TextField)`
  width: 70%;
  margin: 0 30px;
`;

const TextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
