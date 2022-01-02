import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "styled-components"

export const ApplyDetailCard = () => {
	const [isClick, setIsClick] = useState<boolean>(false)

	const onClickCard = () => {
		setIsClick(!isClick)
	}
	return (
		<CardWrapper isClick={isClick} >
			<Card sx={{ minWidth: 275 }} onClick={onClickCard} >
			<CardContent>
				<Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
				taisei yasui
				</Typography>
				<CardCommentBackGround>
					ApplyDetailです
				</CardCommentBackGround>
			</CardContent>
			<CardActions>
				<Button>Profile</Button>
			</CardActions>
			</Card>
		</CardWrapper>
	)
}

type CardWrapperProps = {
	isClick: boolean;
}

const CardWrapper = styled.div<CardWrapperProps>`
  margin: 20px 100px 10px 50px;
  border: ${props =>
	props.isClick ? 'solid 3px #D1D3FF' : 'none'
  }
`

const CardCommentBackGround = styled.div`
  background-color: #F1F1F2;
  width: 600px;
  min-height: 50px;
  heigth: auto;
  border-radius: 5px;
  padding: 15px;
`

