import { Button } from '@mui/material'
import React, { VFC } from 'react'
import styled from "styled-components"

export const MoveToApply: VFC = () => {
	return (
		<>
			<MatchApplyDescription>
			募集されているP2Pから<br/>Matchingする
			</MatchApplyDescription>
			<ButtonWrapper>
				<Button variant="outlined">ナビゲータとして応募する</Button>
			</ButtonWrapper>
		</>
	)
}

const MatchApplyDescription = styled.div`
	margin-top: 100px;
	text-align: center;
	font-size: 20px;
`

const ButtonWrapper = styled.div`
	text-align: center;
	margin-top: 20px;
`
