import { VFC } from 'react'
import { Header } from "../organisms/Header"
import styled from "styled-components"
import Grid from "@mui/material/Grid"
import { MatchScheduleCards } from '../organisms/MatchScheduleCards'

export const Home: VFC = () => {
	return (
		<BackGround>
			<Header />
			<Grid container>
				<Grid item xs={8}>
					<MatchingTitle>
						Matchingの予定
					</MatchingTitle>
					<MatchScheduleCards/>
				</Grid>
				<Grid item xs={4}>

				</Grid>
			</Grid>

		</BackGround>
	)
}

const BackGround = styled.div`
	background-color: #FAFAFA;
	width: 100vw;
	height: 100vh;
`

const MatchingTitle = styled.p`
	margin-left: 50px;
	margin-top: 20px;
	font-size: 25px;
	font-family: Corben;
`
