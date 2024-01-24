
import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import Slider from '@mui/material/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IntegerSlider({ step, min, max }) {

  return (
    <Box sx={{
      padding: '10px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Slider
        defaultValue = {0}
        valueLabelDisplay = "auto"
        step = {step}
        marks
        min = {min}
        max = {max}
      />
    </Box>
  )
}
