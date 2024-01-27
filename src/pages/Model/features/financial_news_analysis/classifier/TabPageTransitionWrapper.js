import { motion } from 'framer-motion';

export default ({children}) => (
	<motion.div
		style={{ width: "100%", height: "100%", position: "relative" }}
		initial={{ opacity: 0, scale: 0.96 }}		
		animate={{ opacity: 1, scale: 1 }}
		exit={{ opacity: 0, scale: 0.96 }}
		transition={{ duration: 0.2 }}
	>
		{children}
	</motion.div>
)
