import axiosClient from '../axiosClient';
import { useQuery, useMutation } from '@tanstack/react-query';

export const useGetFinancialNewsAnalysisTasks = () => useQuery({ 
	queryKey: ['financialNewsAnalysisTasks'],
	queryFn: async () => await axiosClient.get("/model/stock_news/scrape_status")
})

export const useGetFinancialNewsAnalysisTask = (id) => useQuery({ 
	queryKey: ['financialNewsAnalysisTask', id],
	queryFn: async () => await axiosClient.get(`/model/stock_news/scrape_status/${id}`)
})

export const useMutateFinancialNewsAnalysisTask = (callback) => useMutation({
  mutationFn: async (req) => { 
    const res = await axiosClient.post("/model/stock_news/scrape", req)
    if(callback) {
      callback(res)
    }
    return res;
  }
})
