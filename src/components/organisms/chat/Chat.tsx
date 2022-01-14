import { IconButton, TextField } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';

export const Chat = () => {
	return (
		<>
			<MainTitle>
				Chat
			</MainTitle>
			<ChatWrapper>
				<ChatRight>
					マッチングありがとうございます
				</ChatRight>
				<TimeRightField>
					2021.11.8:12:30
				</TimeRightField>
				<ChatRight>
					今週の日曜日の午後3時からは <br />
					どうでしょうか？
				</ChatRight>
				<TimeRightField>
					2021.11.8:12:30
				</TimeRightField>
				<ChatLeft>
					いいですね！<br/>
					ぜひその時間にやりましょう
				</ChatLeft>
				<TimeLeftField>
					2021.11.8:12:40
				</TimeLeftField>
				<ChatLeft>
					Zoomのリンクはこちらから送ります！
				</ChatLeft>
				<TimeLeftField>
					2021.11.8:12:42
				</TimeLeftField>
				<ChatRight>
					わかりました!<br />ありがとうございます！
				</ChatRight>
				<TimeRightField>
					2021.11.8:13:30
				</TimeRightField>
				<TextFieldWrapper>
					<TextField style={{width: 500}} />
					<IconButton >
						<SendIcon style={{width: 40, height: 40, marginLeft: 10}} />
					</IconButton>
				</TextFieldWrapper>
			</ChatWrapper>
		</>
	)
}

const MainTitle = styled.h3`
	margin-bottom: 0;
	margin-top: 15px;
	text-align: center;
	font-size: 35px;
`

const ChatWrapper = styled.div`
	margin-top: 20px;
	width: 600px;
	height: 700px;
	border-radius: 50px;
	background-color: white;
	padding: 10px;
`

const ChatRight = styled.div`
	background-color: #F0F8FF;
	border-radius: 25px;
	margin-left: 250px;
	margin-top: 30px;
	padding: 10px;
	display: flex;
	justify-content: center;
`

const ChatLeft = styled.div`
	background-color: #ffffe0;
	border-radius: 25px;
	margin-left: 25px;
	margin-right: 250px;
	margin-top: 30px;
	padding: 10px;
	display: flex;
	justify-content: center;
`

const TimeRightField = styled.span`
	font-size: 13px;
	margin-left: 20px;
`

const TimeLeftField = styled.span`
	margin-left: 475px;
	font-size: 13px;
`

const TextFieldWrapper = styled.div`
	margin-top: 100px;
	margin-left: 30px;
`
