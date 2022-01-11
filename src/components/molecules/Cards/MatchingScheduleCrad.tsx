import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import moment from "moment";

type PropsType = {
  username: string;
  title: string;
  beginTime: Date;
  endTime: Date;
  isNavigator: boolean;
};

export const MatchingScheduleCrad = (props: PropsType) => {
  const { username, title, beginTime, endTime, isNavigator } = props

  return (
    <>
      <CardWrapper isNavigator={isNavigator} >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              {username}
            </Typography>
            <CardCommentBackGround>{title}</CardCommentBackGround>
            <Typography sx={{ fontSize: 20 }} color="text.primary">
              {moment(beginTime).format("MMMM Do, h:mm a").toString()}   ~    {moment(endTime).format("MMMM Do, h:mm a").toString()}
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Profile</Button>
          </CardActions>
        </Card>
      </CardWrapper>
    </>
  );
};

type isNavigatorType = {
  isNavigator: boolean
};

const CardWrapper = styled.div<isNavigatorType>`
  margin: 20px 100px 10px 50px;
  border: ${(props) =>
    props.isNavigator ? "solid 2px #D1D3FF" : "solid 2px #FFD1D1"};
`;

const CardCommentBackGround = styled.div`
  background-color: #f1f1f2;
  width: 600px;
  min-height: 50px;
  heigth: auto;
  border-radius: 5px;
  padding: 15px;
`;
