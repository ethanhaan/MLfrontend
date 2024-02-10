import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default ({ scrapeData, limit }) => {

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(() => {
        let progress = 0;
        if(scrapeData && scrapeData["urls"]) {
          progress = 10
        } 
        else if(scrapeData && scrapeData["page_contents"]){
          progress = 10 + 0.9*(scrapeData["page_contents"].length/limit)
        }
        return progress;
      })
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <LinearProgressWithLabel value={progress} />
    </Box>
  )
}
