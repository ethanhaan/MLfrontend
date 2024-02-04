import Typography from '@mui/material/Typography';
import React from 'react';
import { Box } from '@mui/material';
import Slider from '@mui/material/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IntegerSlider({ width, step, min, max, onChange, name, icon }) {

  return (
    <Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5px',
        width,
      }}>
        <FontAwesomeIcon 
          icon={icon} 
          style={{
            color: 'rgba(0, 0, 0, 0.54)',
            marginRight: '8px',
            verticalAlign: 'middle',
          }}
        />
        <Typography variant="subtitle1" component="div" style={{
          flexGrow: 1,
          fontSize: '13px',
          fontWeight: '400',
          fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
          color: 'rgba(0, 0, 0, 0.6)',
        }}>
          {name}
        </Typography>
      </Box>
      <Slider
        defaultValue = {0}
        valueLabelDisplay = "auto"
        step = {step}
        marks
        min = {min}
        max = {max}
        onChange = {onChange}
        name = {name}
        sx={{
          width: "100%"
        }}
      />
    </Box>
  )
}
