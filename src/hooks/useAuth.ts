import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useCallback } from 'react'
import { useSetLoginIdContext } from '../providers/LoginIdProvider';

export const useAuth = () => {
	const navigate = useNavigate()
	const setLoginId = useSetLoginIdContext()

	const login = useCallback((id: string) => {
		axios.get(`https://peerprogramming.herokuapp.com/users/${id}`)
		.then((res) => {
			console.log(res)
			if (res.data) {
				setLoginId(id)
				navigate("/home")
			}
		})
	}, [])

	return { login }
}

