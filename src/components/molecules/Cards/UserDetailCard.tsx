import { memo } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from "styled-components"
import { UserProfileList } from '../UserProfileList';

export const UserDetailCard = memo(() => {

	return (
		<>
			<CardPosition>
				<Card>
					<CardContent>
						<CardCommentBackGround>
							<UserProfileList title="使える言語" listItemTitle="language (can use)" listItem={['C言語', 'Go', 'Ruby', 'TypeScript']} />
							<UserProfileList title="所持しているポイント" listItemTitle="evaluation point" listItem={['5']} />
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
