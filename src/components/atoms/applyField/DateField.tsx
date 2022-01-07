import { VFC, useState } from 'react'
import styled from "styled-components"
import { Grid, TextField } from '@mui/material'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Typography from '@mui/material/Typography';

export const DateField = () => {
	const [dateValue, SetDateValue] = useState<Date | null>(null)

	const onChangeDateValue = (newValue: Date | null) => {
		SetDateValue(newValue)
	}
	return (
		<InputFieldWrapper>
			<Typography>
				日時
			</Typography>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DesktopDatePicker
					label=""
					inputFormat="MM/dd/yyyy"
					value={dateValue}
					onChange={onChangeDateValue}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</InputFieldWrapper>
	)
}

const InputFieldWrapper = styled.div`
	margin-top: 60px;
`
