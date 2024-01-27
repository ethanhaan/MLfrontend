import { motion } from 'framer-motion';

export default ({children}) => (
	<motion.div
		style={{ width: "100%" }}
		initial={{ opacity: 0, y: -15 }}		
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0 }}
	>
		{children}
	</motion.div>
)
