import { Box } from '@mui/material';

export default ({sx, children}) => {
	return (
		<Box sx={{
			padding: "40px 36px",
			border: "1px solid #a8a8a8",
			boxShadow: "0 2px 16px 2px rgba(0, 0, 0, 0.05)",
			borderRadius: "32px",
			...sx
		}}>
			{children}
		</Box>
	)
}
