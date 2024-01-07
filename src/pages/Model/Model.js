import Mainframe from '../../components/Mainframe.js';
import Heading from '../../components/Heading.js';
import Features from './features/Features.js';
import { useEffect, useState, useContext} from 'react';
import { useTheme } from '@mui/material/styles';
import { MainContext } from '../MLPanel/MLPanel.js';
import { Box } from '@mui/material';
import { useGetImdbRatingsHtml } from '../../api/imdb_ratings/imdbRatingsApi.js';
import { MailRounded } from '@mui/icons-material';
import DiabetesFeatures from './features/DiabetesFeatures.js'; 

export default () => {

	const theme = useTheme();
	const { main, setMain } = useContext(MainContext);

	return (
		<Mainframe sx={{
			flex: 3.5,
			overflowX: 'auto',
			overflowY: 'auto',
			paddingLeft: '0px',
		}}>
			{/* <DiabetesFeatures/> */}
			{
				(main.html && !main.selectedClassifier) && (
					<iframe
						srcDoc={main.html}
						title="IMDB Ratings"
						width="100%"
						height="100%"
						style={{ 
							border: 'none',
							overflowX: 'scroll',
						}}
					/>
				)
			}
			<Box sx={{
				paddingLeft: '36px'
			}}>
				{
					main.selectedClassifier && (
						<Box>
							<Heading sx={{ marginBottom: '20px' }}>
								{main.selectedClassifier
									.split('_')
									.map(word => word.charAt(0).toUpperCase() + word.slice(1))
									.join(' ')}
							</Heading>
							<Features/>
						</Box>
					)
				}
			</Box>
		</Mainframe>
	)
}
