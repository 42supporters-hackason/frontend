import { VFC } from 'react'
import { Header } from '../organisms/Header'
import styled from "styled-components"
import { Grid } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom"
import { UseLanguageField } from '../atoms/applyField/UseLanguageField';
import { UsernameField } from '../atoms/applyField/UsernameField';
import { KeywordField } from '../atoms/applyField/KeywordField';
import { DateField } from '../atoms/applyField/DateField';


export const ApplyNavigator: VFC = () => {
	const navigate = useNavigate();

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
						<UseLanguageField />
					</Grid>
					<Grid xs={6}>
						<UsernameField />
					</Grid>
					<Grid xs={6}>
						<KeywordField />
					</Grid>
					<Grid xs={6}>
						<DateField />
					</Grid>
					<Grid xs={6}>
						<ButtonWrapper>
							<Button variant="outlined" onClick={onClickApplyButton} >絞り込む</Button>
						</ButtonWrapper>
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
	margin: 40px;
	font-size: 25px;
	border: 10px solid;
	border-color: #D1D3FF;
	border-radius: 50px;
	padding: 15px;
`

const ButtonWrapper = styled.div`
	margin-top: 60px;
`
