import axiosClient from '../axiosClient';
import { useQuery } from '@tanstack/react-query';

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