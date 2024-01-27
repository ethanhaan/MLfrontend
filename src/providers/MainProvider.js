import { useEffect, useState, createContext } from 'react';
import { useGetImdbRatingsModels, useGetImdbRatingsHtml, useGetImdbRatingsFeatures } from '../api/imdb_ratings/imdbRatingsApi.js';
import { useGetDiabetesPredictionModels, useGetDiabetesPredictionHtml, useGetDiabetesPredictionFeatures } from '../api/diabetes_prediction/diabetesPredictionApi.js';

export const MainContext = createContext();

export default ({children}) => {

  const mainInitial = {
		model: "Financial News Analysis",
		modelsAvailable: [],
    modelState: "DEFAULT/CLASSIFIER",
    popupComponent: null,
    showDataAnalysis: true,
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
			setMain({
        ...main, 
        modelsAvailable: apiModelCalls[main.model]? apiModelCalls[main.model].data: [], 
        features: apiFeatureCalls[main.model] ? apiFeatureCalls[main.model].data : [], 
        html: apiHtmlCalls[main.model] ? apiHtmlCalls[main.model].data: [] 
      })	
		}
    console.log(main);
	}, [main.model]);

  return (
    <MainContext.Provider value={{main, setMain}} >
      {children}
    </MainContext.Provider>
  )

}

