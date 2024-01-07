import axiosClient from '../axiosClient';
import { useQuery } from '@tanstack/react-query';

export const useGetDiabetesPredictionModels = () => useQuery({
    queryKey: ['diabetesPredictionModels'],
    queryFn: async () => (await axiosClient.get("/model/diabetes_prediction/models")).data
})

export const useGetDiabetesPredictionFeatures = () => useQuery({
	queryKey: ['diabetesPredictionFeatures'],
	queryFn: async () => (await axiosClient.get("/model/diabetes_prediction/features")).data
})

export const useGetDiabetesPredictionHtml = () => useQuery({
	queryKey: ['diabetesPredictionHtml'],
	queryFn: async () => {
		const pathToHtmlFile = '/static/diabetes_prediction/htmls/diabetes_predictions.html';
		const response = await axiosClient.get(pathToHtmlFile);
		return response.data;
	}
})