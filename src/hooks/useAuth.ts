import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useCallback } from 'react'

export const useAuth = () => {
	const navigate = useNavigate()

	const login = useCallback((id: string) => {
		axios.get(`https://peerprogramming.herokuapp.com/users/${id}`)
		.then((res) => {
			console.log(res)
			if (res.data) {
				navigate("/home")
			}
		})
	}, [])

	return { login }
}

