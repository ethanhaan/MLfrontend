import { useEffect, useState, useContext} from 'react';
import { useTheme } from '@mui/material/styles';
import { MainContext } from '../../../providers/MainProvider';
import { useGetDiabetesPredictionFeatures } from '../../../api/diabetes_prediction/diabetesPredictionApi.js';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

export default () => {

    const theme = useTheme();
    const { main, setMain } = useContext(MainContext);
    
    // const reqBody = {};
    // main.features.forEach(feature => {
    //     reqBody[feature[0]] = null;
    // })

    // const handleInputChange = (feature, newValue) => {
    //     reqBody[feature] = newValue    
    // }

    // main.features.reduce((acc, feature) => {
    //     console.log(feature)
    // });

    const [reqBody, setReqBody] = useState(() => {
        const initialReqBody = main.features.reduce((acc, feature) => {
            acc[feature[0]] = null;
            return acc;
        }, {});

        console.log(initialReqBody);

        return initialReqBody;
    });


    console.log(main.features);
    console.log(reqBody);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            {
                main.features.map((feature, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                        }}
                        >
                        <label 
                            htmlFor={`input-${feature[0]}`}
                            style={{
                            fontWeight: 400,
                            fontSize: '15px',
                            marginBottom: '5px',
                            }}
                        >
                            {feature[0]}
                        </label>
                        <TextField
                            variant="outlined"
                            type="text"
                            id={`input-${feature[0]}`}
                            // onChange = {(e) => handleInputChange(feature[0], e.target.value)}
                            InputProps={{
                            style: {
                                border: '1px solid #e0e0e0',
                                borderRadius: '4px',
                                padding: '8px 10px',
                                outline: 'none',
                                height: '40px',
                            },
                            }}
                            sx={{
                                width: 'auto',
                                maxWidth: '300px',
                                my: 1
                            }}
                        />
                    </Box>
                ))
            }
        </Box>
    )
}
