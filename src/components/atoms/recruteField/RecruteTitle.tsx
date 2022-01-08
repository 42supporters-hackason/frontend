import React, { memo, useContext } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import styled from "styled-components"
import { useSetRecruteTitleContext } from '../../../providers/RecrutePostProvider';

export const RecruteTitle = memo(() => {
	const setRecruteTitle = useSetRecruteTitleContext();
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
