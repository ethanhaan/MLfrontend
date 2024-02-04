import { Box, CircularProgress } from '@mui/material';
import ScrapeInProgress from './ScrapeInProgress';

export default ({ scrapeMutation,  }) => {
  switch(scrapeMutation.status) {
    case "idle":
      return (
        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          flexDirection: "column",
          marginTop: "48px",
          fontStyle: "italic",
          gap: "12px"
        }}>
          No web scrape started yet
        </Box>
      )
    case "loading":
      return (
        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          marginTop: "48px",
          flexDirection: "column",
          fontStyle: "italic",
          gap: "12px"
        }}>
          <CircularProgress size="50px" color="inherit" />
          Making Request
        </Box>
      )
    case "success":
      return (
        <ScrapeInProgress />
      )
    case "error":
      return (
        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          marginTop: "48px",
          flexDirection: "column",
          fontStyle: "italic",
          gap: "12px"
        }}>
          An Error Occured
        </Box>
      )
  }
}
