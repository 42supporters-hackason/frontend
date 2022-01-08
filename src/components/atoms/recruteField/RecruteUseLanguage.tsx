import React, { memo } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import styled from "styled-components"

export const RecruteUseLanguage = memo(() => {
	return (
		<>
			<Typography>
				使用する言語
			</Typography>
			<StyledTextField variant="outlined" label="使用する言語" />
		</>
	)
})

const StyledTextField = styled(TextField)`
	width: 300px
`
