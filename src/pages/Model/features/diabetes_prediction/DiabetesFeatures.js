import { useEffect, useState, useContext} from 'react';
import { useTheme } from '@mui/material/styles';
import { MainContext } from '../../MLPanel/MLPanel.js';
import { Box } from '@mui/material';
import IntegerInput from '../components/IntegerInput.js';
import IntegerSlider from '../components/IntegerSlider.js';
import SubmitButton from '../components/SubmitButton.js';
import { faPersonPregnant, faCubesStacked, faDroplet, faRuler, faFlask, faWeightScale, faCircleInfo, faUser } from '@fortawesome/free-solid-svg-icons';
import { usePostDiabetesPrediction } from '../../../api/diabetes_prediction/diabetesPredictionApi.js';

export default () => {

	const { main, setMain } = useContext(MainContext);

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
  const { mutate: postDiabetesPrediction, isLoading, isError } = usePostDiabetesPrediction();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = () => {
    postDiabetesPrediction({formValues, classifier: main.selectedClassifier});
    console.log(main.selectedClassifier);
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
                // type=
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
                icon={faDroplet}
              />
              <IntegerInput 
                name="SkinThickness" 
                onChange={handleInputChange} 
                value={formValues["SkinThickness"]}
                icon={faRuler}
              />
              <IntegerSlider
                step={5}
                min={0}
                max={40}
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
          }}>
              <IntegerInput 
                name="Insulin" 
                onChange={handleInputChange} 
                value={formValues["Insulin"]}
                icon={faFlask}
              />
              <IntegerInput 
                name="BMI" 
                onChange={handleInputChange} 
                value={formValues["BMI"]}
                icon={faWeightScale}
                float
              />
              <IntegerInput 
                name="DiabetesPedigreeFunction" 
                onChange={handleInputChange} 
                value={formValues["DiabetesPedigreeFunction"]}
                icon={faCircleInfo}
                float
              />
              <IntegerInput 
                name="Age" 
                onChange={handleInputChange} 
                value={formValues["Age"]}
                icon={faUser}
              />
          </Box>
      </Box>
  )
}
