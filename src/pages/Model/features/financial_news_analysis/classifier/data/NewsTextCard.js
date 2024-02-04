import { useState } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactComponent as HourglassIcon } from '../../../../../../icons/hourglass-clock-solid.svg';
import { ReactComponent as CheckIcon } from '../../../../../../icons/circle-check-solid.svg';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default ({ searchText, status, timestamp, delay, sx, onClick, selected }) => {
  
  const [ rendered, setRendered ] = useState(false);
  const [ hovered, setHovered ] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={ rendered ? {
        delay: 0,
        duration: 0.15,
      } : {
        delay: delay,
        type: "spring", 
        stiffness: 400,
        damping: 25,
      }}
      whileHover={{
        y: -6
      }}
      whileTap={rendered ? {
        scale: 0.99
      } : {
        scale: 1
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onAnimationComplete={()=>setRendered(true)}
      onClick={onClick}
    >
      <Box sx={{
        height: "100%",
        position: "relative",
        border: `solid ${selected ? "#3b3b3b": "#a8a8a8aa"} 1px`,
        borderRadius: "12px",
        display: "flex",
        padding: "24px",
        cursor: "pointer",
        alignItems: "center",
        "&:hover": {
          border: "solid #3b3b3b 1px"
        },
        transition: "150ms ease-out all",
        marginBottom: "14px",
      }}>
        <Box sx={{
          width: "24px", 
          height: "24px",
        }}>
          { status==="IN_PROGRESS" && (
            <HourglassIcon fill="#FBBE24"/>
          )}
          { status==="COMPLETE" && (
            <CheckIcon fill="#23B164"/>
          )}
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "18px",
          gap: "4px"
        }}>
          <Box sx={{
            fontWeight: 600,
            color: "#3B3B3B"
          }}>
            "{searchText}"
          </Box>
          <Box sx={{
            color: "#3B3B3BAA",
            fontSize: "12px"
          }}>
            {days[timestamp.getDay()]}
            {", "} 
            {timestamp.getDate()}
            {" "} 
            {months[timestamp.getMonth()]}
            {" "} 
            {timestamp.getFullYear()}
          </Box>
        </Box>
      </Box>
    </motion.div>
  )
}
