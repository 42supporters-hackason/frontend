import { useCallback, useState } from 'react'
import axios from "axios";
import { User } from "../interfase"

export const useGetSpecificUser = () => {
	const [specificUser, setSpecificUser] = useState<User | undefined>(undefined)
	const [isLoading, setIsLoading] = useState(false)


	const getSpecificUser = useCallback(async (id: number | undefined) => {
		setIsLoading(true)

		await axios.get<Array<User>>(`https://peerprogramming.herokuapp.com/users/${id}`)
		.then((res: any) => {
			setSpecificUser({
					id: res.data.id,
					name: res.data.name,
					mail: res.data.mail,
					evaluationPoint: res.data.evaluationPoint,
					icon: res.data.icon,
					otherSkill: res.data.otherSkill,
					postID: res.data.postID,
					userSkills: res.data.userSkills,
			})
		})
		.finally(() => {
			setIsLoading(false)
		})
	}, [])

	return {getSpecificUser, specificUser, isLoading}
}
