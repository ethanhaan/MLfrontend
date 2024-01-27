import { useContext } from 'react';
import { Box } from '@mui/material';
import { MainContext } from '../providers/MainProvider';
import { AnimatePresence, motion } from 'framer-motion';

export default () => {

	const { main, setMain } = useContext(MainContext);

  return (
    <AnimatePresence>
      {main.popupComponent && (
        <>
          <Box 
            sx={{
              position: "absolute",
              zIndex: 10,
              width: "100vw !important",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
            onClick={()=>setMain({...main, popupComponent: null})}
          >
            {main.popupComponent}
          </Box>
          <motion.div
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              backgroundColor: "#000000",
              overflow: "hidden"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
          >
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
