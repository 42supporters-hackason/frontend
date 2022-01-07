import styled from "styled-components"
import { TextField } from '@mui/material'
import Typography from '@mui/material/Typography';

export const UseLanguageField = () => {
	return (
		<InputFieldWrapper>
			<Typography>
				使用する言語
			</Typography>
			<StyledTextField variant="outlined" label="使用する言語" />
		</InputFieldWrapper>
	)
}

const InputFieldWrapper = styled.div`
	margin-top: 60px;
`

const StyledTextField = styled(TextField)`
	width: 300px
`

