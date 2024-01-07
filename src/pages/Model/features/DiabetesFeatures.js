import { useEffect, useState, useContext} from 'react';
import { useTheme } from '@mui/material/styles';
import { MainContext } from '../../MLPanel/MLPanel.js';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import BooleanSelect from '../components/BooleanSelect.js';
import IntegerInput from '../components/IntegerInput.js';

export default () => {
    
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            border: '1px solid red',
            height: '100%',
        }}>
            <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'top',
                alignItems: 'flex-start',
                border: '1px solid blue',
            }}>
                hello
            </Box>
            <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'top',
                alignItems: 'flex-start',
                border: '1px solid green',
            }}>
                world
            </Box>
        </Box>
    )
}