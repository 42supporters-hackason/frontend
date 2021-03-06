import { useContext, memo } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Typography from "@mui/material/Typography";
import DateTimePicker from "@mui/lab/DateTimePicker";
import {
  ApplyEndDateContext,
  ApplyStartDateContext,
  SetApplyEndDateContext,
  SetApplyStartDateContext,
} from "../../../providers/ApplyPostProvider";

export const ApplyDateField = memo(() => {
  const applyStartDate = useContext(ApplyStartDateContext);
  const setApplyStartDate = useContext(SetApplyStartDateContext);
  const applyEndDate = useContext(ApplyEndDateContext);
  const setApplyEndDate = useContext(SetApplyEndDateContext);

  const onChangeStartDateValue = (newValue: Date | undefined | null) => {
    setApplyStartDate(newValue);
  };

  const onChangeEndDateValue = (newValue: Date | undefined | null) => {
    setApplyEndDate(newValue);
  };

  return (
    <InputFieldWrapper>
      <Typography style={{ marginBottom: "15px" }}>日時</Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="start"
          value={applyStartDate}
          onChange={onChangeStartDateValue}
          renderInput={(params: any) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="end"
          value={applyEndDate}
          onChange={onChangeEndDateValue}
          renderInput={(params: any) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </InputFieldWrapper>
  );
});

const InputFieldWrapper = styled.div`
  margin-top: 60px;
`;
