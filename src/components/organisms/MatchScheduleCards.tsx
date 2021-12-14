import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "styled-components"

export const MatchScheduleCards = () => {
  return (
    <>
      <CardPosition>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              taisei yasui
            </Typography>
            <CardCommentBackGround>
              AWSの学習に困っています。
              どなたか一緒に手伝ってくれる人がいたら嬉しいです。
            </CardCommentBackGround>
          </CardContent>
          <CardActions>
            <Button>Profile</Button>
          </CardActions>
        </Card>
      </CardPosition>
      <CardPosition>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              taisei yasui
            </Typography>
            <CardCommentBackGround>
              AWSの学習に困っています。
              どなたか一緒に手伝ってくれる人がいたら嬉しいです。
            </CardCommentBackGround>
          </CardContent>
          <CardActions>
            <Button>Profile</Button>
          </CardActions>
        </Card>
      </CardPosition>
      <CardPosition>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              taisei yasui
            </Typography>
            <CardCommentBackGround>
              AWSの学習に困っています。
              どなたか一緒に手伝ってくれる人がいたら嬉しいです。
            </CardCommentBackGround>
          </CardContent>
          <CardActions>
            <Button>Profile</Button>
          </CardActions>
        </Card>
      </CardPosition>
    </>
  );
}

const CardPosition = styled.div`
  margin: 20px 100px 10px 50px;
`

const CardCommentBackGround = styled.div`
  background-color: #F1F1F2;
  width: 600px;
  min-height: 50px;
  heigth: auto;
  border-radius: 5px;
  padding: 15px;
`

