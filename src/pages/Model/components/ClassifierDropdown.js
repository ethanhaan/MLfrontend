import React from 'react';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { useContext } from 'react';
import { MainContext } from '../../../providers/MainProvider.js';
import { MenuItem } from '@mui/material';
import { motion } from 'framer-motion';


export default function ClassifierDropdown() {

  const { main, setMain } = useContext(MainContext);

  return (
    <motion.div 
      style={{ 
        minWidth: 120,
        transition: "150ms ease-out all",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <FormControl fullWidth>
        <InputLabel sx={{
          fontSize: '15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'translate(15px, 7px)',
          '&.Mui-focused': {
            transform: 'translate(15px, -40%) scale(0.75)', 
          },
          '&.MuiInputLabel-shrink': {
            transform: 'translate(15px, -40%) scale(0.75)',
          },
        }}>
          Classifier
        </InputLabel>
        <Select
            value={main.selectedClassifier}
            onChange={(event)=>{setMain({...main, selectedClassifier: event.target.value })}}
            label="Classifiers"
            displayEmpty
            sx={{ 
              width: "180px",
              height: "35px",
              color: '#2B2B2B',
              fontFamily: "Montserrat",
              ".MuiSelect-select": {
                height: "40px", // Make sure the select height matches the container
                lineHeight: "40px", // Use line height to center text vertically
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: '6px',
              },
            }}
          >
            {main.modelsAvailable.map((model) => (
              <MenuItem value={model}>{model}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </motion.div>
  )
}

