import { Box } from '@mui/material';
import { useContext } from 'react';
import { MainContext } from '../../../../providers/MainProvider';
import DiabetesDefault from './DiabetesDefault';
import DiabetesFeatures from './DiabetesFeatures.js';

export default () => {

	const { main, setMain } = useContext(MainContext);

  return (
    <>
      { main.modelState==="DEFAULT" && (
        <DiabetesDefault />
      )}
      {main.modelState==="DEFAULT/CLASSIFIER" && (
        <DiabetesFeatures /> 
      )}
			{
				(main.html && main.modelState==="DEFAULT/DATA_ANALYSIS") && (
					<iframe
						srcDoc={main.html}
						title={main.model}
            width="100%"
						height="100%"
						style={{ 
							border: 'none',
							overflowX: 'scroll',
						}}
					/>
				)
			}
    </>
  )
}
