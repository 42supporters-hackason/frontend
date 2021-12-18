import { VFC } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "styled-components"

export const UserDetailCard: VFC = () => {
	return (
		<>
			<CardPosition>
				<Card>
					<CardContent>
						<Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
						taisei yasui
						</Typography>
					</CardContent>
					<CardActions>
						<Button>Profile</Button>
					</CardActions>
				</Card>
			</CardPosition>
		</>
	)
}


const CardPosition = styled.div`
  margin: 20px 100px 10px 50px;
`
