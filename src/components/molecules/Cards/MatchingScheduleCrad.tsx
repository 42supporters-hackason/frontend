import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import moment from "moment";
import { Dispatch, SetStateAction } from "react";

type PropsType = {
  username: string;
  title: string;
  beginTime: Date;
  endTime: Date;
  navigatorId: number | undefined;
  driverId: number | undefined;
  isNavigator: boolean;
  isMyRelatedPost: boolean;
  isOpenChat: boolean;
  setIsOpenChat: Dispatch<SetStateAction<boolean>>;
};

export const MatchingScheduleCrad = (props: PropsType) => {
  const {
    username,
    title,
    beginTime,
    endTime,
    navigatorId,
    driverId,
    isNavigator,
    isMyRelatedPost,
    isOpenChat,
    setIsOpenChat,
  } = props;
  const loginId = localStorage.getItem("id");

  return (
    <>
      {isMyRelatedPost ? (
        <CardWrapper isNavigator={isNavigator} navigatorId={navigatorId}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              {navigatorId !== 0 ? (
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                >
                  navigatorは {username} です
                </Typography>
              ) : (
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                >
                  matchingが成立していません
                </Typography>
              )}
              <CardCommentBackGround>{title}</CardCommentBackGround>
              <Typography sx={{ fontSize: 20 }} color="text.primary">
                {moment(beginTime).format("MMMM Do, h:mm a").toString()} ~{" "}
                {moment(endTime).format("MMMM Do, h:mm a").toString()}
              </Typography>
            </CardContent>
            <CardActions>
              <Button>Github Profile</Button>
              <Button onClick={() => setIsOpenChat(!isOpenChat)}>
                Chatをする
              </Button>
            </CardActions>
          </Card>
        </CardWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

type isNavigatorType = {
  navigatorId: number | undefined;
  isNavigator: boolean;
};

const CardWrapper = styled.div<isNavigatorType>`
  margin: 20px 100px 10px 50px;
  border: ${(props) =>
    props.navigatorId === 0 ? "none" : "solid 2px #2abca7"};
`;

const CardCommentBackGround = styled.div`
  background-color: #f1f1f2;
  width: 600px;
  min-height: 50px;
  heigth: auto;
  border-radius: 5px;
  padding: 15px;
`;
