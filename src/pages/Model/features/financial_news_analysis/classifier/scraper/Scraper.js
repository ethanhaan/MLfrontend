import { useState, useEffect } from 'react';
import { Box, CircularProgress, Slider } from '@mui/material';
import TabPageTransitionWrapper from '../TabPageTransitionWrapper';
import NewsTreeView from '../data/NewsTreeView';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import ScrapeProgress from './ScrapeProgress';
import { useGetFinancialNewsAnalysisTask, useMutateFinancialNewsAnalysisTask } from '../../../../../../api/financial_news_analysis/financialNewsAnalysisApi';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default () => {

  const [ selectedId, setSelectedId ] = useState("");
  const [ limit, setLimit ] = useState(3);
  const [ searchQuery, setSearchQuery ] = useState("");
  const scrapeMutation = useMutateFinancialNewsAnalysisTask((res) => { console.log("RESULT OF CALLBACK: ", res.data.taskId); setSelectedId(res.data.taskId) });
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
        display: "flex",
        gap: "24px"
      }}>
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
          <Box sx={{ margin: "24px 0", display: "flex", gap: "12px" }}>
            <Input 
              icon={faMagnifyingGlass}
              onChange={(e)=>setSearchQuery(e.target.value)}
              name="Google Search Query"
              width="300px"
            />
            <Button
              defaultBorder
              sx={{ 
                width: "120px",
                padding: "8px 12px",
                justifyContent: "center",
              }}
              onClick={() => {
                scrapeMutation.mutate({
                  searchQuery,
                  limit
                })
              }}
            >
              Search
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: "24px" }}>
            <Box sx={{ color: "#3B3B3B", fontSize: "12px" }}>No. websites to search</Box>
            <Slider
              defaultValue = {0}
              valueLabelDisplay = "auto"
              step = {5}
              marks
              min = {5}
              max = {50}
              onChange = {(e)=>setLimit(e.target.value)}
              sx={{
                width: "100%"
              }}
            />
          </Box>
          <Box sx={{ 
            fontWeight: 600, 
            color: "#3b3b3b",
            marginTop: "48px"
          }}>
            Scrape Progress
          </Box>
          <ScrapeProgress 
            scrapeMutation={scrapeMutation}
            scrapeData={singleScrapeData}
            limit={limit}
          />
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
              No Search Initiated
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
      </Box>
    </TabPageTransitionWrapper>
  )
}
