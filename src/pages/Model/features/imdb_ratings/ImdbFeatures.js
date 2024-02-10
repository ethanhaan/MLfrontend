import { useEffect, useState, useContext} from 'react';
import { useTheme } from '@mui/material/styles';
import { MainContext } from '../../../../providers/MainProvider.js';
import { Box } from '@mui/material';
import { usePostImdbPrediction } from '../../../../api/imdb_ratings/imdbRatingsApi.js';
import Input from '../../components/Input.js';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import SubmitButton from '../../components/SubmitButton.js';
import ClassifierDropdown from '../../components/ClassifierDropdown.js';
import { motion } from 'framer-motion';
import Button from '../../components/Button.js';
import { ReactComponent as PlaneIcon } from '../../../../icons/paper-plane-top-solid.svg';
import SendIcon from '@mui/icons-material/Send';

export default () => {

  const { main,setMain } = useContext(MainContext);

  const [formValues, setFormValues] = useState({
    Review: '',
  })

  const { mutate: postImdbPrediction, isLoading, isError } = usePostImdbPrediction(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = () => {
    postImdbPrediction({formValues, classifier: main.selectedClassifier});
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
        marginTop: '30px',
        gap: '10px'
      }}>
        <Input 
          name="Review"
          onChange={handleInputChange}
          value={formValues["Review"]}
          icon={faFile}
          type="String"
          width= '450px'
        />
        <motion.div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
        >
          <Button 
            sx={{
              width: '25px',
              height: '25px',
              padding: '10px',
              fill: '#3B3B3B',
            }}
            onClick={handleSubmit}
            icon= <PlaneIcon/>
          >
          </Button>
        </motion.div>
      </Box>
  </>
  )
}
