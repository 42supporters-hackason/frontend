import { memo, useContext } from "react";
import { ApplyUseLanguageContext, SetApplyUseLanguageContext } from "../../../providers/ApplyPostProvider";
import { Typography } from '@mui/material'
import styled from "styled-components"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const ApplyUseLanguageField = memo(() => {
  const setApplyUseLanguage = useContext(SetApplyUseLanguageContext);
  const applyUseLanguage = useContext(ApplyUseLanguageContext);

	const handleChange = (event: SelectChangeEvent) => {
    setApplyUseLanguage(event.target.value as string);
  };

  return (
    <InputFieldWrapper>
			<Typography>
				使用する言語
			</Typography>
			<SForm sx={{ m: 1 }}>
        <InputLabel id="demo-simple-select-label">use language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={applyUseLanguage}
          label="use language"
          onChange={handleChange}
        >
          <MenuItem value={'Java'}>Java</MenuItem>
          <MenuItem value={'C言語'}>C言語</MenuItem>
          <MenuItem value={'JavaScript'}>JavaScript</MenuItem>
          <MenuItem value={'Python'}>Python</MenuItem>
          <MenuItem value={'Ruby'}>Ruby</MenuItem>
        </Select>
      </SForm>
    </InputFieldWrapper>
  );
});

const InputFieldWrapper = styled.div`
  margin-top: 60px;
`;

const SForm = styled(FormControl)`
  font-size: 1em;
  font-family: 'Source Sans Pro',arial,sans-serif;
  border: 1px solid #cecece;
  color:#FAFAFA;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 80%;
  max-width: 600px;
  margin-top: 15px;
`
