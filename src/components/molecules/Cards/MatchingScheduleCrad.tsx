import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import moment from "moment";
import { Dispatch, SetStateAction } from "react";
import { Avatar } from "@mui/material";
import avatar_img1 from "../../../img/icon_sample1.png";
import avatar_img2 from "../../../img/icon_sample2.png";
import avatar_img3 from "../../../img/icon_sample3.png";
import avatar_img4 from "../../../img/icon_sample4.png";
import avatar_img5 from "../../../img/icon_sample5.png";
import avatar_img6 from "../../../img/icon_sample6.png";
import avatar_img7 from "../../../img/icon_sample7.png";
import avatar_img8 from "../../../img/icon_sample8.png";
import avatar_img9 from "../../../img/icon_sample9.png";
import avatar_img10 from "../../../img/icon_sample10.png";

type PropsType = {
  username: string;
  title: string;
  beginTime: Date;
  endTime: Date;
  navigatorId: number | undefined;
  driverId: number | undefined;
  requiredSkills?: {
    id: number;
    skill: string;
  }[];
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
    requiredSkills,
    isNavigator,
    isMyRelatedPost,
    isOpenChat,
    setIsOpenChat,
  } = props;

  let avatar;

  switch (navigatorId) {
    case 1:
      avatar = avatar_img1;
      break;
    case 2:
      avatar = avatar_img2;
      break;
    case 3:
      avatar = avatar_img3;
      break;
    case 4:
      avatar = avatar_img4;
      break;
    case 5:
      avatar = avatar_img5;
      break;
    case 6:
      avatar = avatar_img6;
      break;
    case 7:
      avatar = avatar_img7;
      break;
    case 8:
      avatar = avatar_img8;
      break;
    case 9:
      avatar = avatar_img9;
      break;
    case 10:
      avatar = avatar_img10;
      break;
  }

  return (
    <>
      {isMyRelatedPost ? (
        <CardWrapper isNavigator={isNavigator} navigatorId={navigatorId}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <Avatar
                  src={avatar}
                  sx={{ width: 35, height: 35, marginRight: "15px" }}
                />
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
              </div>
              <CardCommentBackGround>{title}</CardCommentBackGround>
              <Typography sx={{ fontSize: 20 }} color="text.primary">
                {moment(beginTime).format("MMMM Do, h:mm a").toString()} ~{" "}
                {moment(endTime).format("MMMM Do, h:mm a").toString()}
              </Typography>
              {requiredSkills ? (
                <Typography
                  sx={{ fontSize: 20, marginTop: "20px" }}
                  color="text.secondary"
                  gutterBottom
                >
                  using Lauguage: {requiredSkills[0]?.skill}
                </Typography>
              ) : (
                <></>
              )}
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
