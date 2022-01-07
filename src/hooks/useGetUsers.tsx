import React, { useState } from 'react'
import axios from "axios";
import { User } from "../interfase"

export const useGetUsers = () => {
	const [users, setUsers] = useState<Array<User>>([])
	const getUser = () => {
		axios.get<Array<User>>("https://blooming-woodland-93253.herokuapp.com/users")
		.then((res: any) => {
			console.log(res)
		})
	}
	return {getUser}
}
