import { useEffect, useState, createContext } from 'react';
import { useGetImdbRatingsModels, useGetImdbRatingsHtml, useGetImdbRatingsFeatures } from '../../api/imdb_ratings/imdbRatingsApi.js';
import { useGetDiabetesPredictionModels, useGetDiabetesPredictionHtml, useGetDiabetesPredictionFeatures } from '../../api/diabetes_prediction/diabetesPredictionApi.js';
import { Box } from '@mui/material';
import Model from '../Model/Model.js';
import Settings from '../Settings/Settings.js';

export const MainContext = createContext();

export default () => {

	const mainInitial = {
		model: null,
		modelsAvailable: [],
		selectedClassifier: null,
		features: [],
		html: null
	}

	const [main, setMain] = useState(mainInitial);
	const apiModelCalls = {
		"IMDB Ratings": useGetImdbRatingsModels({ enabled: main && main.model==="IMDB Ratings" }),
		// "Wine Quality Prediction": useGetWineQualityPredictionModels({ })
		"Diabetes Prediction": useGetDiabetesPredictionModels({ enabled: main && main.model==="Diabetes Prediction" }),
	}
	const apiHtmlCalls = {
		"IMDB Ratings": useGetImdbRatingsHtml({ enabled: main && main.model==="IMBD Ratings"}),
		"Diabetes Prediction": useGetDiabetesPredictionHtml({ enabled: main && main.model==="Diabetes Prediction"}),
	}
	const apiFeatureCalls = {
		"IMDB Ratings": useGetImdbRatingsFeatures({ enabled: main && main.model==="IMBD Ratings"}),
		"Diabetes Prediction": useGetDiabetesPredictionFeatures({ enabled: main && main.model==="Diabetes Prediction"}),
	}

	useEffect(() => {
		if(main && main.model) {
			setMain({...main, modelsAvailable: apiModelCalls[main.model].data, features: apiFeatureCalls[main.model].data, html: apiHtmlCalls[main.model].data })	
			console.log(main);
			console.log(apiModelCalls[main.model].data);
			console.log(apiHtmlCalls[main.model].data);
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
