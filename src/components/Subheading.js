import { Box } from '@mui/material';

export default ({sx, children}) => {
	return (
		<Box sx={{
			fontWeight: 500,
			fontSize: 14,
			color: "#3b3b3b",
			...sx
		}}>
			{children}	
		</Box>
	)
}
