import styled from "styled-components"
import { ApplyDetailCard } from '../../molecules/Cards/ApplyDetailCard';

const tmp: number[] = [1, 2, 3]

export const ApplyDetailCardsList = () => {
	return (
		<>
			{tmp.map(() => {
				return <ApplyDetailCard />
			})}
		</>
	)
}
