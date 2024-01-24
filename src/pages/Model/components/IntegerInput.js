import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputAdornment from '@mui/material/InputAdornment';

export default function IntegerInput({ value, onChange, name, icon, float = false }) {

  const [error, setError] = useState(false);

  // Float validation
  const isFloat = (value) => {
    const num = parseFloat(value);
    return !isNaN(num) && num.toString().indexOf('.') !== -1;
  };

  const handleChange = (event) => {
    // Call existing on change
    onChange(event);
    // Float
    if (float) {
      setError(!isFloat(event.target.value));
    }
    // Number
    if (!float) {
      setError(isFloat(event.target.value));
    }
  }

  return (
    <Box sx={{
      padding: '10px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <TextField
        error = {error}
        id = "outlined-error-helper-text"

        type = "number"
        name = {name}
        value = {value}
        label = {`Enter ${name}`}
        onChange = {handleChange}
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
