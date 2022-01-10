import styled from "styled-components"
import { ApplyDetailCard } from '../../molecules/Cards/ApplyDetailCard';

const applyData = [
	{
		username: "鈴木　一郎",
		postComment: "Reactが勉強したいです",
	}
]

export const ApplyDetailCardsList = () => {
	return (
		<>
			{applyData.map(() => {
				return <ApplyDetailCard />
			})}
		</>
	)
}
