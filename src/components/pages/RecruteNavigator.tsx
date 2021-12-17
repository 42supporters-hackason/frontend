import React, { useState, VFC } from 'react'
import { Header } from '../organisms/Header'
import styled from "styled-components"
import { Button, Grid, TextField, Typography } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { useNavigate } from "react-router-dom"

export const RecruteNavigator: VFC = () => {
	const [dateValue, SetDateValue] = useState<Date | null>(null)
	const navigate = useNavigate()

	const onChangeDateValue = (newValue: Date | null) => {
		SetDateValue(newValue)
	}

	const onClickRecruteButton = () => {
		navigate('/')
	}

	return (
		<>
		<Header />
		<RecruteNavigatorBackGround>
			<MainTitle>
				あなたが興味のあるトピックを設定して、P2P相手を募集しましょう
			</MainTitle>
			<Grid container>
				<Grid xs={6}>
					<InputFieldWrapper>
						<Typography>
							使用する言語
						</Typography>
						<StyledTextField variant="outlined" label="使用する言語" />
					</InputFieldWrapper>
				</Grid>
				<Grid xs={6}>
					<InputFieldWrapper>
						<Typography>
							キーワード
						</Typography>
						<StyledTextField variant="outlined" label="キーワード" />
					</InputFieldWrapper>
				</Grid>
				<Grid xs={6}>
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
				</Grid>
				<Grid xs={6}>
					<InputFieldWrapper>
						<Button variant="outlined" onClick={onClickRecruteButton} >この条件で募集する</Button>
					</InputFieldWrapper>
				</Grid>
			</Grid>
		</RecruteNavigatorBackGround>
		</>
	)
}

const RecruteNavigatorBackGround = styled.div`
	text-align: center;
`

const MainTitle = styled.div`
	margin-top: 50px;
	font-size: 25px;
	border: 10px solid;
	border-color: #FFD1D1;
	padding: 15px;
`

const InputFieldWrapper = styled.div`
	margin-top: 30px;
`

const StyledTextField = styled(TextField)`
	width: 300px
`

