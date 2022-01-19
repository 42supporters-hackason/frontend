import { useState, VFC } from "react";
import { ApplyDetailCardsList } from "../organisms/apply/ApplyDetailCardsList";
import { Header } from "../organisms/Header";
import Grid from "@mui/material/Grid";
import { UserDetailCard } from "../molecules/Cards/UserDetailCard";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { postDataType } from "../../interfase";
import http from "../../http-common";

export const ApplyDetail: VFC = () => {
  const navigate = useNavigate();
  const [onClickId, setOnClickId] = useState<number | undefined>(undefined);
  const loginId = localStorage.getItem("id");
  console.log(onClickId);

  const onClickApplyNavigator = async () => {
    await http.get<postDataType>(`/posts/${onClickId}`).then(async (res) => {
      let tmpPost = JSON.stringify({
        id: res.data.id,
        title: res.data.title,
        beginTime: res.data.beginTime,
        endTime: res.data.endTime,
        driverId: res.data.driverId,
        authorName: res.data.authorName,
        navigatorId: Number(loginId),
        otherSkill: res.data.otherSkill,
        requiredSkills: res.data.requiredSkills,
      });

      console.log(tmpPost);
      await http.put(`/posts/${onClickId}`, tmpPost).then((res) => {
        console.log(res);
      });
    });
    navigate("/home");
  };

  return (
    <>
      <Header />
      <Grid container>
        <Grid xs={8}>
          <ApplyDetailCardsList
            onClickId={onClickId}
            setOnClickId={setOnClickId}
          />
        </Grid>
        <Grid xs={4}>
          <UserDetailCard />
          <ButtonWrapper>
            <SButton variant="outlined" onClick={onClickApplyNavigator}>
              この募集にApplyする
            </SButton>
          </ButtonWrapper>
        </Grid>
      </Grid>
    </>
  );
};

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const SButton = styled(Button)`
  margin-top: 15px;
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
  width: 250px;
  color: #fff;

  &:hover {
    background-color: #5fdecc;
  }
`;
