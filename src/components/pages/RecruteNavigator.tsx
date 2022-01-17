import React, { useState, VFC } from "react";
import { Header } from "../organisms/Header";
import styled from "styled-components";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RecruteUseLanguage } from "../atoms/recruteField/RecruteUseLanguage";
import { RecruteTitle } from "../atoms/recruteField/RecruteTitle";
import { RecruteDateField } from "../atoms/recruteField/RecruteDateField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  useRecruteEndDateContext,
  useRecruteStartDateContext,
  useRecruteTitleContext,
  useRecruteUseLanguageContext,
} from "../../providers/RecrutePostProvider";
import moment from "moment";
import http from "../../http-common";
import { useLoginUsernameContext } from "../../providers/LoginUserProvider";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const RecruteNavigator: VFC = () => {
  const navigate = useNavigate();
  const recruteTitle = useRecruteTitleContext();
  const recruteUseLanguage = useRecruteUseLanguageContext();
  const recruteStartDate = useRecruteStartDateContext();
  const recruteEndDate = useRecruteEndDateContext();
  const loginUsername = useLoginUsernameContext();
  const loginId = localStorage.getItem("id");

  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);

  const onClickRecruteButton = async () => {
    const data = JSON.stringify({
      title: recruteTitle,
      beginTime: recruteStartDate,
      endTime: recruteEndDate,
      driverId: Number(loginId),
      authorName: loginUsername,
      navigatorId: 0,
      otherSkill: "",
      requiredSkill: [
        {
          skill: recruteUseLanguage,
        },
      ],
    });

    await http
      .post("/posts", data)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => console.log(res));
    navigate("/home");
  };

  const onClickOpenModal = () => {
    setOpen(true);
  };

  return (
    <>
      <Header />
      <RecruteNavigatorBackGround>
        <SDivContainer>
          <SDIvHead>
            <h2>条件を設定してP2P相手を募集しましょう</h2>
          </SDIvHead>
          <Grid container>
            <Grid xs={6}>
              <InputFieldWrapper>
                <RecruteUseLanguage />
              </InputFieldWrapper>
            </Grid>
            <Grid xs={6}>
              <InputFieldWrapper>
                <RecruteTitle />
              </InputFieldWrapper>
            </Grid>
            <Grid xs={6}>
              <InputFieldWrapper>
                <RecruteDateField />
              </InputFieldWrapper>
            </Grid>
            <Grid xs={6}>
              <InputFieldWrapper>
                <SButton variant="outlined" onClick={onClickOpenModal}>
                  この条件で募集する
                </SButton>
              </InputFieldWrapper>
            </Grid>
          </Grid>
        </SDivContainer>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} style={{ borderRadius: "15px" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              この条件で募集しますか？
              <br />
              title: {recruteTitle}
              <br />
              useLangage: {recruteUseLanguage} <br />
              startDate:{" "}
              {moment(recruteStartDate).format("MMMM Do, h:mm a").toString()}
              <br />
              endDate:{" "}
              {moment(recruteEndDate).format("MMMM Do, h:mm a").toString()}
            </Typography>
            <SButton
              variant="outlined"
              onClick={onClickRecruteButton}
              style={{ marginTop: "50px" }}
            >
              この条件で募集する
            </SButton>
          </Box>
        </Modal>
      </RecruteNavigatorBackGround>
    </>
  );
};

const RecruteNavigatorBackGround = styled.div`
  text-align: center;
`;

const InputFieldWrapper = styled.div`
  margin-top: 50px;
`;

const SDivContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-color: #fafafa;
`;

const SDIvHead = styled.div`
  -webkit-border-radius: 6px 6px 0px 0px;
  -moz-border-radius: 6px 6px 0px 0px;
  border-radius: 6px 6px 0px 0px;
  background-color: #2abca7;
  color: #fafafa;

  h2 {
    text-align: center;
    padding: 18px 0 18px 0;
    font-size: 1.4em;
  }
`;

const SButton = styled(Button)`
  margin-top: 90px;
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
  width: 300px;
  color: #fff;

  &:hover {
    background-color: #5fdecc;
  }
`;
