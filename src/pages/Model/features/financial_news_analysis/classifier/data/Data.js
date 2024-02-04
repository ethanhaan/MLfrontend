import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import TabPageTransitionWrapper from '../TabPageTransitionWrapper';
import NewsTextCard from './NewsTextCard';
import NewsTreeView from './NewsTreeView';
import Button from '../../../../components/Button';
import { ReactComponent as PlusIcon } from '../../../../../../icons/plus-solid.svg';
import { useGetFinancialNewsAnalysisTasks, useGetFinancialNewsAnalysisTask } from '../../../../../../api/financial_news_analysis/financialNewsAnalysisApi';

export default ({ setTabValue }) => {

  const [ selectedId, setSelectedId ] = useState("");
  const { data: allScrapeData, refetch: refetchAll } = useGetFinancialNewsAnalysisTasks();
  const { data: singleScrapeData, refetch: refetchSingle } = useGetFinancialNewsAnalysisTask(selectedId);

  useEffect(() => {
    let interval;
    if(refetchAll && !interval) {
      interval = setInterval(() => {
        refetchAll();
      }, 5000); 
    } 
    return () => { clearInterval(interval) }
  }, [refetchAll])

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
        position: "relative",
        height: "100%",
        gap: "32px"
      }}>
        <Box sx={{ width: "50%", position: "relative" }}>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <Box sx={{ 
              fontWeight: 600, 
              color: "#3b3b3b",
            }}>
              Recent Web Scrapes
            </Box>
            <Button
              icon={<PlusIcon width="12px" fill="#3B3B3B" />}
              sx={{
                transform: "translateY(-6px)",
                marginRight: "24px",
                padding: "6px 10px",
              }}
              onClick={()=>setTabValue("SCRAPE")}
             >
              Add New Scrape
            </Button>
          </Box>
          <Box sx={{
            height: "100%",
            width: "100%",
            overflowY: "scroll",
            overflowX: "hidden",
          }}>
            { (!allScrapeData || allScrapeData.isLoading) ? (
              <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <CircularProgress size="50px" color="inherit" />
              </Box>
            ) : (
              <>
                <Box sx={{
                  height: "14px"
                }}/>
                {allScrapeData.data.map((scrape, index) => (
                  <NewsTextCard
                    searchText={scrape.query}
                    status={scrape.status}
                    timestamp={new Date(scrape.time_started)}
                    selected={selectedId===scrape.id}
                    onClick={()=>setSelectedId(scrape.id)}
                    delay={0.075*index}
                  />
                ))}
              </>
            )}
          </Box>
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
      </Box>
    </TabPageTransitionWrapper>
  )
}
