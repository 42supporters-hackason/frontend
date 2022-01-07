import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

export const KeywordField = () => {
  return (
    <InputFieldWrapper>
      <Typography>キーワード</Typography>
      <StyledTextField variant="outlined" label="キーワード" />
    </InputFieldWrapper>
  );
};

const InputFieldWrapper = styled.div`
  margin-top: 60px;
`;

const StyledTextField = styled(TextField)`
  width: 300px;
`;
