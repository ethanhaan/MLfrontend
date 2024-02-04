import Typography from '@mui/material/Typography';
import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import Slider from '@mui/material/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

export default function IntegerSlider({ step, min, max, onChange, name, icon }) {

  return (
    <motion.div 
      style={{
        transition: "150ms ease-out all",
        padding: '20px 0px',
        width: '200px',
        height: '55px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5px',
        width: '187px',
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
          Enter {name}
        </Typography>
      </Box>
      <Slider
        size = "small"
        defaultValue = {0}
        valueLabelDisplay = "auto"
        step = {step}
        marks
        min = {min}
        max = {max}
        onChange = {onChange}
        name = {name}
      />
    </motion.div>
  )
}
