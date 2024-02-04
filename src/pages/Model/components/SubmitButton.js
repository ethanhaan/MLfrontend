import React from 'react';
import { Box, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';

export default function SubmitButton({ onClick }) {
  return (
    <motion.div
      style={{
        // width: '100%',
        // display: 'flex',
        // justifyContent: 'right',
        // alignItems: 'center',
        marginTop: '5px',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
    </motion.div>
  )
}
