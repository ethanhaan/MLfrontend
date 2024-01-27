import { useState } from 'react';
import { Box } from '@mui/material';
import TabPageTransitionWrapper from '../TabPageTransitionWrapper';
import NewsTextCard from './NewsTextCard';
import NewsTreeView from './NewsTreeView';

export default () => {

  const [ selectedData, setSelectedData ] = useState("");

  return (
    <TabPageTransitionWrapper>
      <Box sx={{
        display: "flex",
        position: "relative",
        height: "100%",
        gap: "32px"
      }}>
        <Box sx={{ flex: 3 }}>
          <Box sx={{ 
            fontWeight: 600, 
            color: "#3b3b3b",
          }}>
            Recent Web Scrapes
          </Box>
          <Box sx={{
            height: "100%",
            width: "100%",
            overflowY: "scroll",
            overflowX: "hidden",
          }}>
            <Box sx={{
              height: "14px"
            }}/>
            <NewsTextCard 
              searchText="Apple Stock"
              status="IN_PROGRESS"
              timestamp={new Date("2024-01-26T15:00:00")}
            />
            <NewsTextCard 
              searchText="Apple Stock"
              status="COMPLETE"
              timestamp={new Date("2024-01-26T15:00:00")}
            />
            <NewsTextCard 
              searchText="Apple Stock"
              status="COMPLETE"
              timestamp={new Date("2024-01-26T15:00:00")}
            />
            <NewsTextCard 
              searchText="Apple Stock"
              status="COMPLETE"
              timestamp={new Date("2024-01-26T15:00:00")}
            />
            <NewsTextCard 
              searchText="Apple Stock"
              status="COMPLETE"
              timestamp={new Date("2024-01-26T15:00:00")}
            />
          </Box>
        </Box>
        <Box sx={{ flex: 2 }}>
          <Box sx={{ 
            fontWeight: 600, 
            color: "#3b3b3b",
            marginBottom: "12px",
          }}>
            Data Details
          </Box>
          <NewsTreeView />
        </Box>
      </Box>
    </TabPageTransitionWrapper>
  )
}
