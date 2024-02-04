import axiosClient from '../axiosClient';
import { useQuery, useMutation } from '@tanstack/react-query';

export const useGetImdbRatingsModels = () => useQuery({ 
	queryKey: ['imdbRatingsModels'],
	queryFn: async () => (await axiosClient.get("/model/imdb_ratings/models")).data
})

export const useGetImdbRatingsFeatures = () => useQuery({
	queryKey: ['imdbRatingsFeatures'],
	queryFn: async () => (await axiosClient.get("/model/imdb_ratings/features")).data
})

export const useGetImdbRatingsHtml = () => useQuery({
	queryKey: ['imdbRatingHtml'],
	queryFn: async () => {
		const pathToHtmlFile = '/static/imdb_ratings/htmls/imdb_ratings.html';
		const response = await axiosClient.get(pathToHtmlFile);
		return response.data;
	}
})

export const usePostImdbPrediction = () => useMutation({
  queryKey: ['imdbPrediction'],
  mutationFn: async ({ formValues, classifier }) => {
    const pathToHtmlFile = `/model/imdb_ratings/${classifier}`
    const response = await axiosClient.post(pathToHtmlFile, formValues);
    return response.data;
  },
  onSuccess: (data) => {
    console.log("Response: ", data);
  }
})
