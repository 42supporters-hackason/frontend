import { VFC, memo, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from "styled-components"
import { UserProfileList } from '../UserProfileList';
import { useGetUsers } from '../../../hooks/useGetUsers';

export const UserDetailCard: VFC = memo(() => {
	const { getUser, users } = useGetUsers()

	useEffect(() => {
		getUser()
	}, [])

	console.log(users)

	return (
		<>
			<CardPosition>
				<Card>
					<CardContent>
						<CardCommentBackGround>
							<UserProfileList title="使える言語" listItemTitle="language (can use)" listItem={['C言語']} />
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
