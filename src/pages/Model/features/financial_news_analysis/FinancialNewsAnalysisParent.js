import { useContext } from 'react';
import { Box } from '@mui/material';
import { MainContext } from '../../../../providers/MainProvider';
import FinancialNewsDefault from './FinancialNewsDefault';
import ClassifierMenu from './classifier/ClassifierMenu';

export default () => {

	const { main, setMain } = useContext(MainContext);

  return (
    <>
      { main.modelState==="DEFAULT" && (
        <FinancialNewsDefault />
      )}
      {main.modelState==="DEFAULT/CLASSIFIER" && (
        <ClassifierMenu />
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
