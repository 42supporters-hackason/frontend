import { useState, VFC } from 'react'
import { ApplyDetailCardsList } from '../organisms/apply/ApplyDetailCardsList'
import { Header } from '../organisms/Header'
import Grid from "@mui/material/Grid"
import { UserDetailCard } from '../molecules/Cards/UserDetailCard'
import { Button } from '@mui/material'
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { postDataType } from "../../interfase"

export const ApplyDetail: VFC = () => {
	const navigate = useNavigate()
	const [onClickId, setOnClickId] = useState<number | undefined>(undefined)
	const loginId = localStorage.getItem('id')
	console.log(onClickId)

	const onClickApplyNavigator = async () => {
		await axios.get<postDataType>(`https://peerprogramming.herokuapp.com/posts/${onClickId}`)
		.then(async (res) => {
			let tmpPost: postDataType = {
				id: res.data.id,
				title: res.data.title,
				beginTime: res.data.beginTime,
				endTime: res.data.endTime,
				driverId: res.data.driverId,
				authorName: res.data.authorName,
				navigatorId: Number(loginId),
				otherSkill: res.data.otherSkill,
				requiredSkill: res.data.requiredSkill,
			}
			console.log(tmpPost)
			//await axios.put(`https://peerprogramming.herokuapp.com/posts/${onClickId}`, {tmpPost})
			//.then((res) => {
			//	console.log(res)
			//})
		})
		navigate('/home')
	}

	return (
		<>
			<Header />
			<Grid container>
				<Grid xs={8}>
					<ApplyDetailCardsList onClickId={onClickId} setOnClickId={setOnClickId} />
				</Grid>
				<Grid xs={4}>
					<UserDetailCard />
					<ButtonWrapper>
						<Button variant="outlined" onClick={onClickApplyNavigator}>この募集にApplyする</Button>
					</ButtonWrapper>
				</Grid>
			</Grid>
		</>
	)
}

const ButtonWrapper = styled.div`
	text-align: center;
	margin-top: 20px;
`
