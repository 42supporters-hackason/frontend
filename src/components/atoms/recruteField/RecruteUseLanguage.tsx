import React, { memo } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import styled from "styled-components"
import {useSetRecruteUseLanguageContext} from "../../../providers/RecrutePostProvider"

export const RecruteUseLanguage = memo(() => {
	const setRecruteUseLanguage = useSetRecruteUseLanguageContext()
	return (
		<>
			<Typography>
				使用する言語
			</Typography>
			<StyledTextField variant="outlined" label="使用する言語" onChange={(e) => setRecruteUseLanguage(e.target.value)} />
		</>
	)
})

const StyledTextField = styled(TextField)`
	width: 300px
`
