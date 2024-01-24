import { useState } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export default ({ icon, mainText, subText, delay, sx, onClick }) => {
  
  const [ rendered, setRendered ] = useState(false);
  const [ hovered, setHovered ] = useState(false);

  return (
    <motion.div 
      style={{
        borderRadius: "12px",
        border: "solid #a8a8a8 1px",
        display: "flex",
        flexDirection: "column",
        background: "#F9F9F9",
        padding: "24px",
        cursor: "pointer",
        ...sx
      }}
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
        scale: 0.965
      } : {
        scale: 1
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onAnimationComplete={()=>setRendered(true)}
      onClick={onClick}
    >
      <Box sx={{
        borderRadius: "12px",
        width: "48px",
        height: "48px",
        padding: "16px",
        background: "white",
        border: "#EAEAEA solid 1px",
        boxShadow: "0px 2px 16px rgba(0, 0, 0, 0.025)",
        "& svg": {
          width: "100%",
          height: "100%",
        },
        "& svg path": {
          fill: "#3b3b3b"
        }
      }}> 
        {icon}
      </Box>
      <Box sx={{
        marginTop: "36px",
        marginBottom: "6px",
        fontWeight: 600 
      }}>
        {mainText}
      </Box>
      <Box sx={{
        fontSize: "12px"
      }}>
        {subText}
      </Box>
    </motion.div>
  )
}
