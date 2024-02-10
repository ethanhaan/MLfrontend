import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputAdornment from '@mui/material/InputAdornment';
import { motion } from 'framer-motion';

export default function Input({ value, onChange, name, icon, type, float = false, width }) {

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
    <TextField
      error = {error}
      id = "outlined-error-helper-text"
      type = {type}
      name = {name}
      value = {value}
      label = {name}
      onChange = {handleChange}
      variant = "outlined"
      InputProps = {{
        startAdornment: (
          <InputAdornment position="start">
            <FontAwesomeIcon icon={icon} />
          </InputAdornment>
        )
      }}
      style={{
        width: width,
      }}
    />
  )
}
