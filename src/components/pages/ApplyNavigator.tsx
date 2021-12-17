import { VFC, useState } from 'react'
import { Header } from '../organisms/Header'
import styled from "styled-components"
import { Grid, TextField } from '@mui/material'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom"


export const ApplyNavigator: VFC = () => {
	const [dateValue, SetDateValue] = useState<Date | null>(null)
	const navigate = useNavigate()

	const onChangeDateValue = (newValue: Date | null) => {
		SetDateValue(newValue)
	}

	const onClickApplyButton = () => {
		navigate('/apply/detail')
	}
	return (
		<>
			<Header />
			<ApplyNavigatorBackGround>
				<MainTitle>
					条件を絞り込んでmatchしたい相手を探しましょう！
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
								ユーザ名
							</Typography>
							<StyledTextField variant="outlined" label="ユーザ名" />
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
					<Grid xs={6}></Grid>
					<Grid xs={6}>
						<InputFieldWrapper>
							<Button variant="outlined" onClick={onClickApplyButton} >絞り込む</Button>
						</InputFieldWrapper>
					</Grid>
				</Grid>
			</ApplyNavigatorBackGround>
		</>
	)
}

const ApplyNavigatorBackGround = styled.div`
	text-align: center;
`

const MainTitle = styled.div`
	margin-top: 50px;
	font-size: 25px;
	border: 10px solid;
	border-color: #D1D3FF;
	padding: 15px;
`

const InputFieldWrapper = styled.div`
	margin-top: 30px;
`

const StyledTextField = styled(TextField)`
	width: 300px
`

