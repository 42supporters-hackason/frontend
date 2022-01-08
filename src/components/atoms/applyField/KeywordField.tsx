import React, { useContext } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ApplyKeywordContext, SetApplyKeywordContext } from "../../../providers/ApplyPostProvider";

export const KeywordField = () => {
  const setApplyKeyword = useContext(SetApplyKeywordContext)

  return (
    <InputFieldWrapper>
      <Typography>キーワード</Typography>
      <StyledTextField variant="outlined" label="キーワード" onChange={(e) => setApplyKeyword(e.target.value)} />
    </InputFieldWrapper>
  );
};

const InputFieldWrapper = styled.div`
  margin-top: 60px;
`;

const StyledTextField = styled(TextField)`
  width: 300px;
`;
