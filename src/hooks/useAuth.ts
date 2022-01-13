import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useCallback } from 'react'
import { useSetLoginUsernameContext, useSetLoginUserAvatorContext } from '../providers/LoginUserProvider';

export const useAuth = () => {
	const navigate = useNavigate()
	const setLoginUsername = useSetLoginUsernameContext()
	const setLoginUserAvator = useSetLoginUserAvatorContext()

	const login = useCallback((id: string) => {
		axios.get(`https://peerprogramming.herokuapp.com/users/${id}`)
		.then((res) => {
			console.log(res)
			if (res.data) {
				localStorage.setItem("id", id)
				setLoginUsername(res.data.name)
				setLoginUserAvator(res.data.icon)
				navigate("/home")
			} else {
				alert("userが見つかりません")
			}
		})
	}, [])

	return { login }
}

