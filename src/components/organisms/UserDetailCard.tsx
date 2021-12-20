import { useState, VFC } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from "styled-components"
import { UserProfileList } from '../molecules/UserProfileList';

export const UserDetailCard: VFC = () => {
	return (
		<>
			<CardPosition>
				<Card>
					<CardContent>
						<Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
						taisei yasui
						</Typography>
						<CardCommentBackGround>
							<UserProfileList title="使える言語" listItemTitle="language" listItem={["Ruby", "Java"]} />
						</CardCommentBackGround>
					</CardContent>
				</Card>
			</CardPosition>
		</>
	)
}

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
