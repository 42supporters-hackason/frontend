import { Button } from '@mui/material'
import React, { VFC } from 'react'
import styled from "styled-components"

export const MoveToRecrute: VFC = () => {
	return (
		<>
			<MatchRecruteDescription>
			あなたが目的を設定して <br/>
			P2Pを募集する
			</MatchRecruteDescription>
			<ButtonWrapper>
				<Button variant="outlined">ナビゲータを募集する</Button>
			</ButtonWrapper>
		</>
	)
}

const MatchRecruteDescription = styled.div`
	margin-top: 100px;
	text-align: center;
	font-size: 20px;
`

const ButtonWrapper = styled.div`
	text-align: center;
	margin-top: 20px;
`
