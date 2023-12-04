import axiosClient from '../axiosClient';
import { useQuery } from '@tanstack/react-query';

export const useGetImdbRatingsModels = () => useQuery({ 
	queryKey: ['imdbRatingsModels'],
	queryFn: async () => (await axiosClient.get("/model/imdb_ratings/models")).data
})

