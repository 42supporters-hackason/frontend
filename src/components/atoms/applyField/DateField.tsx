import { VFC, useState } from 'react'
import styled from "styled-components"
import { TextField } from '@mui/material'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Typography from '@mui/material/Typography';
import DateTimePicker from '@mui/lab/DateTimePicker';

export const DateField = () => {
	const [startDateValue, SetStartDateValue] = useState<Date | null>(null)
	const [endDateValue, SetEndDateValue] = useState<Date | null>(null)

	const onChangeStartDateValue = (newValue: Date | null) => {
		SetStartDateValue(newValue)
	}

	const onChangeEndDateValue = (newValue: Date | null) => {
		SetEndDateValue(newValue)
	}

	return (
		<InputFieldWrapper>
			<Typography>
				日時
			</Typography>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DateTimePicker
					label="start"
					value={startDateValue}
					onChange={onChangeStartDateValue}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DateTimePicker
					label="end"
					value={endDateValue}
					onChange={onChangeEndDateValue}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</InputFieldWrapper>
	)
}

const InputFieldWrapper = styled.div`
	margin-top: 60px;
`
