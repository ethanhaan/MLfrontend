import axiosClient from '../axiosClient';
import { useQuery } from '@tanstack/react-query';

export const useGetFinancialNewsAnalysisTasks = () => useQuery({ 
	queryKey: ['financialNewsAnalysisTasks'],
	queryFn: async () => await axiosClient.get("/model/stock_news/scrape_status")
})

export const useGetFinancialNewsAnalysisTask = (id) => useQuery({ 
	queryKey: ['financialNewsAnalysisTask', id],
	queryFn: async () => await axiosClient.get(`/model/stock_news/scrape_status/${id}`)
})

