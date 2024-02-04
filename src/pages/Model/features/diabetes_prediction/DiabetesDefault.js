import { useContext } from 'react';
import { Box } from '@mui/material';
import Card from '../../components/Card';
import { MainContext } from '../../../../providers/MainProvider';
import { ReactComponent as MagnifyingGlassIcon } from '../../../../icons/magnifying-glass-chart-light.svg';
import { ReactComponent as NotebookIcon } from '../../../../icons/notebook-light.svg';

export default () => {

  const { main, setMain } = useContext(MainContext);

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}>
      <Box sx={{
        marginLeft: '36px',
        padding: '10px',
        width: '69%',
        fontSize: '14px',
        color: '#676464',
      }}>
        The Diabetes Prediction Classifier is an advanced analytical tool engineered to assess and forecast the likelihood of diabetes in individuals. 
      </Box>
      <Box sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "48px"
      }}>
        <Card
          mainText="Explore Notebook"
          subText="View Detailed Data Process & Jupyter Notebook"
          icon={<NotebookIcon />}
          sx={{ width: "260px"}}
          onClick={()=>setMain({...main, modelState: "DEFAULT/DATA_ANALYSIS"})}
          delay={0}
        />
        <Card
          mainText="Explore Model"
          subText="Use the classifier on your own input data"
          icon={<MagnifyingGlassIcon />}
          sx={{ width: "260px"}}
          onClick={()=>setMain({...main, modelState: "DEFAULT/CLASSIFIER"})}
          delay={0.1}
        />
      </Box>
      <Box sx={{
        height: "64px",
        width: "100%",
      }}/>
    </Box>
  )
}
