import styled from "styled-components";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { memo, useContext } from "react";
import { SetApplyUseLanguageContext } from "../../../providers/ApplyPostProvider";

export const ApplyUseLanguageField = memo(() => {
  const setApplyUseLanguage = useContext(SetApplyUseLanguageContext);
  return (
    <InputFieldWrapper>
      <Typography>使用する言語</Typography>
      <StyledTextField
        variant="outlined"
        label="使用する言語"
        onChange={(e) => setApplyUseLanguage(e.target.value)}
      />
    </InputFieldWrapper>
  );
});

const InputFieldWrapper = styled.div`
  margin-top: 60px;
`;

const StyledTextField = styled(TextField)`
  width: 300px;
`;
