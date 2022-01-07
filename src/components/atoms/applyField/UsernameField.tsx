import styled from "styled-components"
import { TextField } from '@mui/material'
import Typography from '@mui/material/Typography';

export const UsernameField = () => {
	return (
		<InputFieldWrapper>
			<Typography>
				ユーザ名
			</Typography>
			<StyledTextField variant="outlined" label="ユーザ名" />
		</InputFieldWrapper>
	)
}

const InputFieldWrapper = styled.div`
	margin-top: 60px;
`

const StyledTextField = styled(TextField)`
	width: 300px
`

