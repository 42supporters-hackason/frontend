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
				localStorage.setItem("id", id)
				setLoginId(id)
				navigate("/home")
			} else {
				alert("userが見つかりません")
			}
		})
	}, [])

	return { login }
}

