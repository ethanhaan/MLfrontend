import { useContext } from 'react';
import { motion } from 'framer-motion';
import { MainContext } from '../providers/MainProvider';

export default ({children, sx}) => {

	const { main, setMain } = useContext(MainContext);

  return (
    <motion.div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        border: "#a8a8a8 solid",
        ...sx
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: main.popupComponent ? 0.15 : 0 }}
    >
      {children}
    </motion.div>
  )
}
