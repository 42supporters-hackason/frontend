import { memo } from "react";
import { TextField } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Typography from "@mui/material/Typography";
import DateTimePicker from "@mui/lab/DateTimePicker";
import {
  useRecruteStartDateContext,
  useSetRecruteStartDateContext,
  useSetRecruteEndDateContext,
  useRecruteEndDateContext,
} from "../../../providers/RecrutePostProvider";
import styled from "styled-components";

export const RecruteDateField = memo(() => {
  const recruteStartDate = useRecruteStartDateContext();
  const setRecruteStartDate = useSetRecruteStartDateContext();
  const recruteEndDate = useRecruteEndDateContext();
  const setRecruteEndDate = useSetRecruteEndDateContext();

  const onChangeStartDateValue = (newValue: Date | undefined | null) => {
    setRecruteStartDate(newValue);
  };

  const onChangeEndDateValue = (newValue: Date | undefined | null) => {
    setRecruteEndDate(newValue);
  };

  return (
    <>
      <DateFieldWrapper>
        <Typography style={{ marginBottom: "15px" }}>日時</Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="start"
            value={recruteStartDate}
            onChange={onChangeStartDateValue}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="end"
            value={recruteEndDate}
            onChange={onChangeEndDateValue}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </DateFieldWrapper>
    </>
  );
});

const DateFieldWrapper = styled.div`
  margin-top: 50px;
`;
