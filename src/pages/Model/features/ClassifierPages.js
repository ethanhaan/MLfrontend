import { useContext } from 'react';
import { MainContext } from '../../../providers/MainProvider';
import { Box } from '@mui/material';
import Heading from '../../../components/Heading';

export default () => {

  const { main, setMain } = useContext(MainContext)

  return (
    <Box sx={{ paddingLeft: "36px" }}>
      <Heading sx={{ marginBottom: '20px' }}>
        {main.selectedClassifier
          .split('_')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}
      </Heading>
    </Box>
  )
}
