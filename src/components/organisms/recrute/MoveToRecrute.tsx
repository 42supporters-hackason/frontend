import { Button } from "@mui/material";
import React, { VFC } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const MoveToRecrute: VFC = () => {
  const navigate = useNavigate();

  const onClickRecruteButton = () => {
    navigate("/recrute");
  };
  return (
    <>
      <MatchRecruteDescription>
        あなたが目的を設定して <br />
        P2Pを募集する
      </MatchRecruteDescription>
      <ButtonWrapper>
        <SButton variant="outlined" onClick={onClickRecruteButton}>
          ナビゲータを募集する
        </SButton>
      </ButtonWrapper>
    </>
  );
};

const MatchRecruteDescription = styled.div`
  margin-top: 100px;
  text-align: center;
  font-size: 20px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const SButton = styled(Button)`
  margin-bottom: 25px;
  background-color: #2abca7;
  padding: 12px 45px;
  border-radius: 5px;
  border: 1px solid #2abca7;
  transition: 0.5s;
  display: inline-block;
  cursor: pointer;
  width: 300px;
  color: #fff;

  &:hover {
    background-color: #5fdecc;
  }
`;
