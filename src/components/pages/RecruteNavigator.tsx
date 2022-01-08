import React, { useContext, useState, VFC } from 'react'
import { Header } from '../organisms/Header'
import styled from "styled-components"
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom"
import { RecruteUseLanguage } from '../atoms/recruteField/RecruteUseLanguage'
import { RecruteTitle } from '../atoms/recruteField/RecruteTitle'
import { RecruteDateField } from '../atoms/recruteField/RecruteDateField'

export const RecruteNavigator: VFC = () => {
	const navigate = useNavigate()
	const [dateValue, SetDateValue] = useState<Date | null>(null)

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
						<RecruteUseLanguage />
					</InputFieldWrapper>
				</Grid>
				<Grid xs={6}>
					<InputFieldWrapper>
						<RecruteTitle />
					</InputFieldWrapper>
				</Grid>
				<Grid xs={6}>
					<InputFieldWrapper>
						<RecruteDateField />
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
	margin-top: 40px;
	font-size: 25px;
	border: 10px solid;
	border-radius: 50px;
	border-color: #FFD1D1;
	padding: 15px;
`

const InputFieldWrapper = styled.div`
	margin-top: 50px;
`

const StyledTextField = styled(TextField)`
	width: 300px
`

