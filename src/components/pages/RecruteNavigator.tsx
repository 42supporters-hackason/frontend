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
import http from "../../http-common"
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
  const loginUsername = useLoginUsernameContext()
  const loginId = localStorage.getItem('id')

  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);

  const onClickRecruteButton = async () => {
    const data = JSON.stringify({
      "title": recruteTitle,
      "beginTime": recruteStartDate,
      "endTime": recruteEndDate,
      "driverId": Number(loginId),
      "authorName": loginUsername,
      "navigatorId": 0,
      "otherSkill": "",
      "requiredSkill": [{
        "id": 0,
        "skill": ""
      }]
    })

    console.log(data)

    await http.post("/posts", data)
    .then((res) => {
      console.log(res)
    })
    .catch((res) => console.log(res))
    navigate("/home");
  };

  const onClickOpenModal = () => {
    setOpen(true);
  };

  return (
    <>
      <Header />
      <RecruteNavigatorBackGround>
        <MainTitle>
          あなたが興味のあるトピックを設定して、P2P相手を募集しましょう
        </MainTitle>
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
              <Button variant="outlined" onClick={onClickOpenModal}>
                この条件で募集する
              </Button>
            </InputFieldWrapper>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
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
            <Button variant="outlined" onClick={onClickRecruteButton}>
              この条件で募集する
            </Button>
          </Box>
        </Modal>
      </RecruteNavigatorBackGround>
    </>
  );
};

const RecruteNavigatorBackGround = styled.div`
  text-align: center;
`;

const MainTitle = styled.div`
  margin-top: 40px;
  font-size: 25px;
  border: 10px solid;
  border-radius: 50px;
  border-color: #ffd1d1;
  padding: 15px;
`;

const InputFieldWrapper = styled.div`
  margin-top: 50px;
`;
