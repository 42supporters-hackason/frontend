import React, { memo, useContext } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import styled from "styled-components"
import { useRecruteTitleContext } from '../../../providers/RecrutePostProvider';

export const RecruteTitle = memo(() => {
	const { setRecruteTitle } = useRecruteTitleContext();
	return (
		<>
			<Typography>
				タイトル
			</Typography>
			<StyledTextField variant="outlined" label="キーワード" onChange={(e) =>setRecruteTitle(e.target.value)} />
		</>
	)
})

const StyledTextField = styled(TextField)`
	width: 300px
`
