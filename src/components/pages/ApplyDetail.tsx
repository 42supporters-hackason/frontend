import { VFC } from 'react'
import { ApplyDetailCards } from '../organisms/apply/ApplyDetailCards'
import { Header } from '../organisms/Header'
import Grid from "@mui/material/Grid"
import { UserDetailCard } from '../organisms/recrute/UserDetailCard'
import { Button } from '@mui/material'
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export const ApplyDetail: VFC = () => {
	const navigate = useNavigate()

	const onClickApplyNavigator = () => {
		navigate('/')
	}

	return (
		<>
			<Header />
			<Grid container>
				<Grid xs={8}>
					<ApplyDetailCards />
				</Grid>
				<Grid xs={4}>
					<UserDetailCard />
					<ButtonWrapper>
						<Button variant="outlined" onClick={onClickApplyNavigator}>この募集にApplyする</Button>
					</ButtonWrapper>
				</Grid>
			</Grid>
		</>
	)
}

const ButtonWrapper = styled.div`
	text-align: center;
	margin-top: 20px;
`
