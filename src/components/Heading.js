import { Box } from '@mui/material';

export default ({sx, children}) => {
	return (
		<Box sx={{
			fontWeight: 600,
			fontSize: 20,
			color: "#3b3b3b",
			...sx
		}}>
			{children}	
		</Box>
	)
}
