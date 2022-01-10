import React, { memo } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import styled from "styled-components"
import {useRecruteUseLanguageContext, useSetRecruteUseLanguageContext} from "../../../providers/RecrutePostProvider"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const RecruteUseLanguage = memo(() => {
	const setRecruteUseLanguage = useSetRecruteUseLanguageContext()
	const recruteUseLanguage = useRecruteUseLanguageContext()

	const handleChange = (event: SelectChangeEvent) => {
    setRecruteUseLanguage(event.target.value as string);
  };

	return (
		<>
			<Typography>
				使用する言語
			</Typography>
			<SForm sx={{ m: 1 }}>
        <InputLabel id="demo-simple-select-label">use language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={recruteUseLanguage}
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
		</>
	)
})

const SForm = styled(FormControl)`
	width: 300px
`
