import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import moment from "moment";

type PropsType = {
  id: number;
  username: string;
  title: string;
  beginTime: Date;
  endTime: Date;
  isMyRelatedPost: boolean;
  requiredSkills?: {
    id: number;
    skill: string;
  }[];
  onClickId: number | undefined;
  setOnClickId: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const ApplyDetailCard = (props: PropsType) => {
  const {
    id,
    username,
    title,
    beginTime,
    endTime,
    isMyRelatedPost,
    requiredSkills,
    onClickId,
    setOnClickId,
  } = props;

  const onClickCard = () => {
    if (onClickId === undefined) {
      setOnClickId(id);
    } else {
      setOnClickId(undefined);
    }
  };

  return (
    <>
      {!isMyRelatedPost ? (
        <CardWrapper onClickId={onClickId} postId={id}>
          <Card sx={{ minWidth: 275 }} onClick={onClickCard}>
            <CardContent>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                gutterBottom
              >
                navigator: {username}
              </Typography>
              <CardCommentBackGround>{title}</CardCommentBackGround>
              <Typography sx={{ fontSize: 20 }} color="text.primary">
                {moment(beginTime).format("MMMM Do, h:mm a").toString()} ~{" "}
                {moment(endTime).format("MMMM Do, h:mm a").toString()}
              </Typography>
              {requiredSkills ? (
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                >
                  using Lauguage: {requiredSkills[0]?.skill}
                </Typography>
              ) : (
                <></>
              )}
            </CardContent>
          </Card>
        </CardWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

type cardwrapperprops = {
  postId: number;
  onClickId: number | undefined;
};

const CardWrapper = styled.div<cardwrapperprops>`
  margin: 20px 100px 10px 50px;
  border: ${(props) =>
    props.onClickId === props.postId ? "solid 3px #2abca7" : "none"};
`;

const CardCommentBackGround = styled.div`
  background-color: #f1f1f2;
  width: 600px;
  min-height: 50px;
  heigth: auto;
  border-radius: 5px;
  padding: 15px;
`;
