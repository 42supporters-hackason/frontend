import { VFC } from "react";
import { Header } from "../organisms/Header";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ApplyUseLanguageField } from "../atoms/applyField/ApplyUseLanguageField";
import { ApplyUsernameField } from "../atoms/applyField/ApplyUsernameField";
import { ApplyKeywordField } from "../atoms/applyField/ApplyKeywordField";
import { ApplyDateField } from "../atoms/applyField/ApplyDateField";

export const ApplyNavigator: VFC = () => {
  const navigate = useNavigate();

  const onClickApplyButton = () => {
    navigate("/apply/detail");
  };

  return (
    <>
      <Header />
        <SDivContainer>
          <SDIvHead>
            <h2>好みの条件でP2P相手を探しましょう</h2>
          </SDIvHead>
          <Grid container>
            <Grid xs={6}>
              <ApplyUseLanguageField />
            </Grid>
            <Grid xs={6}>
              <ApplyUsernameField />
            </Grid>
            <Grid xs={6}>
              <ApplyKeywordField />
            </Grid>
            <Grid xs={6}>
              <ApplyDateField />
            </Grid>
            <Grid xs={6}>
              <ButtonWrapper>
                <SButton variant="outlined" onClick={onClickApplyButton}>
                  絞り込む
                </SButton>
              </ButtonWrapper>
            </Grid>
          </Grid>
        </SDivContainer>
    </>
  );
};


const ButtonWrapper = styled.div`
  margin-top: 60px;
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
  width: 30%;
  color: #fff;

	&:hover {
		background-color: #5fdecc;
	}
`;
