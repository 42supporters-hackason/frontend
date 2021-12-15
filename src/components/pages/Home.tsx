import { VFC } from 'react'
import { Header } from "../organisms/Header"
import styled from "styled-components"
import Grid from "@mui/material/Grid"
import { MatchScheduleCards } from '../organisms/MatchScheduleCards'
import Button from '@mui/material/Button';

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
					<MatchingRouteTitle>
						Matchingする
					</MatchingRouteTitle>
					<MatchRecruteDescription>
					あなたが目的を設定して <br/>
					P2Pを募集する
					</MatchRecruteDescription>
					<ButtonWrapper>
						<Button variant="outlined">ナビゲータを募集する</Button>
					</ButtonWrapper>
					<MatchRecruteDescription>
					募集されているP2Pから<br/>Matchingする
					</MatchRecruteDescription>
					<ButtonWrapper>
						<Button variant="outlined">ナビゲータとして応募する</Button>
					</ButtonWrapper>
				</Grid>
			</Grid>
		</BackGround>
	)
}

const BackGround = styled.div`
	background-color: #FAFAFA;
	width: 100vw;
	height: 100%;
`

const MatchingTitle = styled.p`
	margin-left: 50px;
	margin-top: 20px;
	font-size: 25px;
	font-family: Corben;
	font-weight: 900;
`

const MatchingRouteTitle = styled.p`
	text-align: center;
	margin-top: 20px;
	font-size: 25px;
	font-family: Corben;
	font-weight: 900;
`

const MatchRecruteDescription = styled.div`
	margin-top: 100px;
	text-align: center;
	font-size: 20px;
`

const ButtonWrapper = styled.div`
	text-align: center;
	margin-top: 20px;
`
