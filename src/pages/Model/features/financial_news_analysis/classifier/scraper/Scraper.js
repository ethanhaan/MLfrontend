import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import TabPageTransitionWrapper from '../TabPageTransitionWrapper';
import NewsTreeView from '../data/NewsTreeView';
import Input from '../../../../components/Input';
import { useGetFinancialNewsAnalysisTask } from '../../../../../../api/financial_news_analysis/financialNewsAnalysisApi';

export default () => {

  const [ selectedId, setSelectedId ] = useState("");
  const { data: singleScrapeData, refetch: refetchSingle } = useGetFinancialNewsAnalysisTask(selectedId);

  useEffect(() => {
    let interval;
    if(refetchSingle && !interval) {
      interval = setInterval(() => {
        refetchSingle();
      }, 5000); 
    } 
    return () => { clearInterval(interval) }
  }, [refetchSingle])

  return (
    <TabPageTransitionWrapper>
      <Box sx={{ 
        width: "50%",
        position: "relative"
      }}>
        <Box sx={{ 
          fontWeight: 600, 
          color: "#3b3b3b",
        }}>
          New Web Scrape
        </Box>
        <Input />
      </Box>
      <Box sx={{ 
        width: "50%",
        position: "relative"
      }}>
        <Box sx={{ 
          fontWeight: 600, 
          color: "#3b3b3b",
          marginBottom: "12px",
        }}>
          Data Details
        </Box>
        { !selectedId ? (
          <Box sx={{
            opacity: 0.35,
            fontSize: "16px",
            fontWeight: 600,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            Nothing Selected
          </Box>
        ) : (
          <>
          { (!singleScrapeData || singleScrapeData.isLoading) ? (
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <CircularProgress size="50px" color="inherit" />
            </Box>
          ) : (
              <NewsTreeView data={singleScrapeData.data}/>
          )}
          </>
        )}
      </Box>
    </TabPageTransitionWrapper>
  )
}
