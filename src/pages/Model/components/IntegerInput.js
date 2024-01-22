import React from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputAdornment from '@mui/material/InputAdornment';

export default function IntegerInput({ value, onChange, name, icon }) {
  return (
    <Box sx={{
      padding: '10px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <TextField
        type = "number"
        name = {name}
        value = {value}
        label = {`Enter ${name}`}
        onChange = {onChange}
        variant = "outlined"
        InputProps = {{
          startAdornment: (
            <InputAdornment position="start">
              <FontAwesomeIcon icon={icon} />
            </InputAdornment>
          )
        }}
      />
    </Box>
  )
}
