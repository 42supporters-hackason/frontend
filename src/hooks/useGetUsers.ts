import React, { useCallback, useState } from 'react'
import axios from "axios";
import { User } from "../interfase"
import { useSetLoginUsernameContext } from '../providers/LoginUserProvider';

export const useGetUsers = () => {
	const [users, setUsers] = useState<User[] | undefined>([])
	const [isLoading, setIsLoading] = useState(false)


	const getUser = useCallback(() => {
		setIsLoading(true)

		axios.get<Array<User>>("https://peerprogramming.herokuapp.com/users")
		.then((res: any) => {
			let tmpArray: User[] = []
			console.log(res)
			res.data.map((item: User) => {
				tmpArray.push({
					id: item.id,
					name: item.name,
					mail: item.mail,
					evaluationPoint: item.evaluationPoint,
					icon: item.icon,
					otherSkill: item.otherSkill,
					postID: item.postID,
					userSkills: item.userSkills,
				})
			})
			setUsers(tmpArray)
		})
		.finally(() => {
			setIsLoading(false)
		})
	}, [])

	return {getUser, users, isLoading}
}
