import React, { memo, useContext } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  SetApplyKeywordContext,
} from "../../../providers/ApplyPostProvider";

export const ApplyKeywordField = memo(() => {
  const setApplyKeyword = useContext(SetApplyKeywordContext);

  return (
    <InputFieldWrapper>
      <Typography>キーワード検索</Typography>
      <StyledTextField
        variant="outlined"
        label="キーワード"
        onChange={(e) => setApplyKeyword(e.target.value)}
      />
    </InputFieldWrapper>
  );
});

const InputFieldWrapper = styled.div`
  margin-top: 60px;
`;

const StyledTextField = styled(TextField)`
  font-size: 1em;
  font-family: 'Source Sans Pro',arial,sans-serif;
  border: 1px solid #cecece;
  color:#FAFAFA;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 80%;
  max-width: 600px;
  margin-top: 15px;
`;
