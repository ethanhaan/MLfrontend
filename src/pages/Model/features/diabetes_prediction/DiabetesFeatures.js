import { useEffect, useState, useContext} from 'react';
import { useTheme } from '@mui/material/styles';
import { MainContext } from '../../../../providers/MainProvider.js';
import { Box } from '@mui/material';
import Input from '../../components/Input.js';
import TextSlider from '../../components/IntegerSlider.js';
import SubmitButton from '../../components/SubmitButton.js';
import { faPersonPregnant, faCubesStacked, faDroplet, faRuler, faFlask, faWeightScale, faCircleInfo, faUser } from '@fortawesome/free-solid-svg-icons';
import { usePostDiabetesPrediction } from '../../../../api/diabetes_prediction/diabetesPredictionApi.js';
import ClassifierDropdown from '../../components/ClassifierDropdown.js';

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
    <>
      <Box sx={{
        marginTop: '20px',
        marginLeft: '36px',
      }}>
        <ClassifierDropdown />
      </Box>
      <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10px',
      }}>
          <Box sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'top',
              alignItems: 'flex-end',
              marginRight: '30px',
          }}>
              <Input 
                name="Pregnancies" 
                onChange={handleInputChange} 
                value={formValues["Pregnancies"]}
                icon={faPersonPregnant}
                type="Number"
              />
              <Input 
                name="Glucose" 
                onChange={handleInputChange} 
                value={formValues["Glucose"]}
                icon={faCubesStacked}
                type="Number"
              />
              <Input 
                name="BloodPressure" 
                onChange={handleInputChange} 
                value={formValues["BloodPressure"]}
                icon={faDroplet}
                type="Number"
              />
              {/* <Input  */}
              {/*   name="SkinThickness"  */}
              {/*   onChange={handleInputChange}  */}
              {/*   value={formValues["SkinThickness"]} */}
              {/*   icon={faRuler} */}
              {/* /> */}
              <TextSlider
                name="SkinThickness"
                onChange={handleInputChange}
                icon={faRuler}
                step={5}
                min={0}
                max={40}
              />
          </Box>
          <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'top',
              alignItems: 'flex-start',
              marginLeft: '30px',
          }}>
              <Input 
                name="Insulin" 
                onChange={handleInputChange} 
                value={formValues["Insulin"]}
                icon={faFlask}
                type="Number"
              />
              <Input 
                name="BMI" 
                onChange={handleInputChange} 
                value={formValues["BMI"]}
                icon={faWeightScale}
                type="Number"
                float
              />
              <Input 
                name="DiabetesPedigreeFunction" 
                onChange={handleInputChange} 
                value={formValues["DiabetesPedigreeFunction"]}
                icon={faCircleInfo}
                type="Number"
                float
              />
              <Input 
                name="Age" 
                onChange={handleInputChange} 
                value={formValues["Age"]}
                icon={faUser}
                type="Number"
              />
          </Box>
      </Box>
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <SubmitButton onClick={handleSubmit}/>
      </Box>
    </>
  )
}
