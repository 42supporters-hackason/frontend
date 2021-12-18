import { VFC } from 'react'
import { ApplyDetailCards } from '../organisms/ApplyDetailCards'
import { Header } from '../organisms/Header'
import Grid from "@mui/material/Grid"
import { UserDetailCard } from '../organisms/UserDetailCard'

export const ApplyDetail: VFC = () => {
	return (
		<>
			<Header />
			<Grid container>
				<Grid xs={8}>
					<ApplyDetailCards />
				</Grid>
				<Grid xs={4}>
					<UserDetailCard />
				</Grid>
			</Grid>
		</>
	)
}

