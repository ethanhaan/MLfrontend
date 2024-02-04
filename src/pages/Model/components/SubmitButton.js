import React from 'react';
import { Box, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';

export default function SubmitButton({ onClick }) {
  return (
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
  )
}
