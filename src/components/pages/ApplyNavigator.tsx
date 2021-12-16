import { VFC } from 'react'
import { Header } from '../organisms/Header'
import styled from "styled-components"
import { Grid, TextField } from '@mui/material'

export const ApplyNavigator: VFC = () => {
	return (
		<>
			<Header />
			<ApplyNavigatorBackGround>
				<MainTitle>
					条件を絞り込んでmatchしたい相手を探しましょう！
				</MainTitle>
				<Grid container>
					<Grid xs={6}>
						<TextField variant="outlined" label="使用する言語" />
					</Grid>
					<Grid xs={6}>
						<TextField variant="outlined" label="ユーザ名" />
					</Grid>
				</Grid>
			</ApplyNavigatorBackGround>
		</>
	)
}

const ApplyNavigatorBackGround = styled.div`
	text-align: center;
`

const MainTitle = styled.div`
	margin-top: 50px;
	font-size: 25px;
	border: 10px solid;
	border-color: #D1D3FF;
	padding: 15px;
`
