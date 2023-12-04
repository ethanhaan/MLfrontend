import { useEffect, useState, createContext } from 'react';
import { useGetImdbRatingsModels } from '../../api/imdb_ratings/imdbRatingsApi.js';
import { Box } from '@mui/material';
import Model from '../Model/Model.js';
import Settings from '../Settings/Settings.js';

export const MainContext = createContext();

export default () => {

	const mainInitial = {
		model: null,
		modelsAvailable: [],
		selectedClassifier: null
	}
	const [main, setMain] = useState(mainInitial);
	const apiCalls = {
		"IMDB Ratings": useGetImdbRatingsModels({ enabled: main && main.model==="IMDB Ratings" })
	}

	useEffect(() => {
		if(main && main.model) {
			setMain({...main, modelsAvailable: apiCalls[main.model].data })	
			console.log(main);
			console.log(apiCalls[main.model].data);
		}
	}, [main.model]);

	return (
		<MainContext.Provider value={{main, setMain}}>
			<Box sx={{
				width: "clamp(50%, 1000px, 90%)",
				height: "clamp(50%, 600px, 90%)",
				display: "flex",
				gap: "36px",
			}}>
				<Settings/>
				<Model />
			</Box>
		</MainContext.Provider>
	)
}
