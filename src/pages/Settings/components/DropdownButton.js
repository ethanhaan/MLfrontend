import { useContext } from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import { ReactComponent as RightArrow } from '../../../icons/rightarrow.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { MainContext } from '../../../providers/MainProvider';

export default ({ task }) => {

	const [ hovered, setHovered ] = useState(false);
	const { main, setMain } = useContext(MainContext);

	return (
		<Box 
			sx={{ 
				fontSize: "14px",
				transition: "150ms ease-out all",
				borderRadius: "5px",
				padding: "8px",
				"&:hover": { backgroundColor: "#00000009" },
				cursor: "pointer",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				height: "16px"
			}}
			onMouseEnter={()=>setHovered(true)}
			onMouseLeave={()=>setHovered(false)}
			onClick={()=>setMain({
        ...main, 
        model: task, 
        selectedClassifier: null, 
        modelState: "DEFAULT" 
      })}
		>
			{task}
			<AnimatePresence>
			{ hovered && (
				<motion.div 
					style={{ fill: "#a8a8a8" }}
					initial={{ opacity: 0, x: -10 }}
					animate={{ opacity: 1, x: 0 }}
				>
					<RightArrow />
				</motion.div>
			)}
			</AnimatePresence>
		</Box>
	)
}
