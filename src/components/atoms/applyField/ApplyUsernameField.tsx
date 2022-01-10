import styled from "styled-components"
import { TextField } from '@mui/material'
import Typography from '@mui/material/Typography';
import { memo, useContext } from "react";
import { SetApplyUsernameContext } from "../../../providers/ApplyPostProvider";

export const ApplyUsernameField = memo(() => {
	const setApplyUsername = useContext(SetApplyUsernameContext)
	return (
		<InputFieldWrapper>
			<Typography>
				ユーザ名
			</Typography>
			<StyledTextField variant="outlined" label="ユーザ名" onChange={(e) => setApplyUsername(e.target.value)} />
		</InputFieldWrapper>
	)
})

const InputFieldWrapper = styled.div`
	margin-top: 60px;
`

const StyledTextField = styled(TextField)`
	width: 300px
`

