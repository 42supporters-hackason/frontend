import { VFC, memo, useEffect } from 'react'
import axios from "axios"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from "styled-components"
import { UserProfileList } from '../UserProfileList';
import { User } from "../../../interfase"

export const UserDetailCard: VFC = memo(() => {
	return (
		<>
			<CardPosition>
				<Card>
					<CardContent>
						<Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
						taisei yasui
						</Typography>
						<CardCommentBackGround>
							<UserProfileList title="プログラミング歴" listItemTitle="years of experience" listItem={["1年"]} />
							<UserProfileList title="使える言語" listItemTitle="language (can use)" listItem={["Ruby", "Java"]} />
							<UserProfileList title="得意な言語" listItemTitle="language (like)" listItem={["Ruby", "Java"]} />
						</CardCommentBackGround>
					</CardContent>
				</Card>
			</CardPosition>
		</>
	)
})

const CardCommentBackGround = styled.div`
  background-color: #F1F1F2;
  min-height: 350px;
  heigth: auto;
  border-radius: 5px;
  padding: 15px;
`

const CardPosition = styled.div`
  margin: 20px 100px 10px 50px;
`
