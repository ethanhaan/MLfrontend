import { useEffect, useState, useContext} from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import IntegerInput from '../components/IntegerInput.js';
import SubmitButton from '../components/SubmitButton.js';
import { faPersonPregnant, faCubesStacked } from '@fortawesome/free-solid-svg-icons';
import { faDropletPercent } from '@fortawesome/pro-solid-svg-icons';
import { usePostDiabetesPredictionRandomForest } from '../../../api/diabetes_prediction/diabetesPredictionApi.js';

export default () => {

  const [formValues, setFormValues] = useState({
    Pregnancies: '',
    Glucose: '',
    BloodPressure: '',
    SkinThickness: '',
    Insulin: '',
    BMI: '',
    DiabetesPedigreeFunction: '',
    Age: '',
  })

  // Make dictionary with all mutate api's and call based on Model.CurrentClassifier
  const { mutate: postDiabetesPredictionRandomForest, isLoading, isError } = usePostDiabetesPredictionRandomForest();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = () => {
    postDiabetesPredictionRandomForest(formValues);
    console.log(formValues);
  }
    
  return (
      <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // border: '1px solid red',
          height: '100%',
      }}>
          <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'top',
              alignItems: 'flex-start',
              // border: '1px solid blue',
          }}>
              <IntegerInput 
                name="Pregnancies" 
                onChange={handleInputChange} 
                value={formValues["Pregnancies"]}
                icon={faPersonPregnant}
              />
              <IntegerInput 
                name="Glucose" 
                onChange={handleInputChange} 
                value={formValues["Glucose"]}
                icon={faCubesStacked}
              />
              <IntegerInput 
                name="BloodPressure" 
                onChange={handleInputChange} 
                value={formValues["BloodPressure"]}
                icon={faDropletPercent}
              />
              <IntegerInput 
                name="SkinThickness" 
                onChange={handleInputChange} 
                value={formValues["SkinThickness"]}
                icon={faCubesStacked}
              />
              <SubmitButton onClick={handleSubmit}/>
          </Box>
          <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'top',
              alignItems: 'flex-start',
              // border: '1px solid green',
          }}>
              <IntegerInput 
                name="Insulin" 
                onChange={handleInputChange} 
                value={formValues["Insulin"]}
                icon={faPersonPregnant}
              />
              <IntegerInput 
                name="BMI" 
                onChange={handleInputChange} 
                value={formValues["BMI"]}
                icon={faCubesStacked}
              />
              <IntegerInput 
                name="DiabetesPedigreeFunction" 
                onChange={handleInputChange} 
                value={formValues["DiabetesPedigreeFunction"]}
                icon={faPersonPregnant}
              />
              <IntegerInput 
                name="Age" 
                onChange={handleInputChange} 
                value={formValues["Age"]}
                icon={faCubesStacked}
              />
          </Box>
      </Box>
  )
}
