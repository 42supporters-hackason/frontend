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
  isNavigator: boolean;
};

const startDate = new Date("December 17, 1995 03:24:00");
const endDate = new Date("December 17, 1995 03:28:00");

export const MatchingScheduleCrad = (props: PropsType) => {
  const { username, title, isNavigator } = props;

  return (
    <>
      <CardWrapper isNavigator={isNavigator}>
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
              {moment(startDate).format("MMMM Do, h:mm a").toString()}   ~    {moment(endDate).format("MMMM Do, h:mm a").toString()}
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
  isNavigator: boolean;
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
