import { VFC, useState, useContext, memo } from 'react'
import styled from "styled-components"
import { TextField } from '@mui/material'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Typography from '@mui/material/Typography';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { ApplyEndDateContext, ApplyStartDateContext, SetApplyEndDateContext, SetApplyStartDateContext } from '../../../providers/ApplyPostProvider';

export const RecruteDateField = memo(() => {
	const onChangeStartDateValue = (newValue: Date | undefined | null) => {
	}

	const onChangeEndDateValue = (newValue: Date | undefined | null) => {
	}

	return (
		<>
			<Typography>
				日時
			</Typography>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DateTimePicker
					label="start"
					value={'hello'}
					onChange={onChangeStartDateValue}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DateTimePicker
					label="end"
					value={'hello'}
					onChange={onChangeEndDateValue}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</>
	)
})
