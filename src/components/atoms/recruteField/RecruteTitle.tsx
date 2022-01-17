import React, { memo } from "react";
import { TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { useSetRecruteTitleContext } from "../../../providers/RecrutePostProvider";

export const RecruteTitle = memo(() => {
  const setRecruteTitle = useSetRecruteTitleContext();
  return (
    <>
      <Typography>タイトル</Typography>
      <StyledTextField
        variant="outlined"
        label="タイトル"
        onChange={(e) => setRecruteTitle(e.target.value)}
        multiline
        rows={4}
      />
    </>
  );
});

const StyledTextField = styled(TextField)`
  font-size: 1em;
  font-family: "Source Sans Pro", arial, sans-serif;
  border: 1px solid #cecece;
  color: #fafafa;
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
