import { useState, VFC } from 'react'
import { Header } from "../organisms/Header"
import styled from "styled-components"
import Grid from "@mui/material/Grid"
import { MatchScheduleCardsList } from '../organisms/home/MatchScheduleCardsList'
import { MoveToApply } from '../organisms/apply/MoveToApply'
import { MoveToRecrute } from '../organisms/recrute/MoveToRecrute'
import { Chat } from '../organisms/chat/Chat'

export const Home: VFC = () => {
	const [isOpenChat, setIsOpenChat] = useState(false)
	return (
		<BackGround>
			<Header />
			<Grid container>
				<Grid item xs={8}>
					<MatchingTitle>
						Matchingの予定
					</MatchingTitle>
					<MatchScheduleCardsList setIsOpenChat={setIsOpenChat} isOpenChat={isOpenChat} />
				</Grid>
				<Grid item xs={4}>
					{isOpenChat ? (
						<Chat />
					): (
						<>
							<MatchingRouteTitle>
								Matchingする
							</MatchingRouteTitle>
							<MoveToRecrute />
							<MoveToApply />
						</>
					)}
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
	font-weight: 900;
`

const MatchingRouteTitle = styled.p`
	text-align: center;
	margin-top: 20px;
	font-size: 25px;
	font-family: Corben;
	font-weight: 900;
`
