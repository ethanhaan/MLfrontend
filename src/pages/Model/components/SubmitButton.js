import React from 'react';
import { Box, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';

export default function SubmitButton({ onClick }) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Button
        variant="contained"
        size="small"
        endIcon={<SendIcon />}
        onClick={onClick}
        sx={{
          fontSize: '14px'
        }}
      >
        Submit
      </Button>
    </Box>
  )
}
