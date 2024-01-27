import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DropdownButton from './DropdownButton.js';

export default () => {

	const theme = useTheme();
	const dropdownMenu = [
		{
			name: "Basic classification",
			classificationTasks: ["IMDB Ratings", "Wine Quality Prediction", "Diabetes Prediction"]
		},
		{
			name: "Natural Language Processing",
			classificationTasks: ["Financial News Analysis"]
		},
		{
			name: "Deep Learning",
			classificationTasks: []
		},
	]

  return (
		<Box sx={{
			"*::before": {
				display: "none !important"
			},
			marginBottom: "24px",
		}}>
			{ dropdownMenu.map((category) => (
				<Accordion sx={{ 
					boxShadow: "none", 
					borderTop: "none",
					borderBottom: "solid 1px #00000033",
					borderRadius: "0px !important",
				}} disableGutters>
					<AccordionSummary
						expandIcon={
							<Box sx={{
								width: "24px",
								height: "24px",
								transition: "150ms ease-out all",
								borderRadius: "5px",
								"&:hover": {
									backgroundColor: "#00000010"
								},
							}}>
								<ExpandMoreIcon />
							</Box>
						}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Box sx={{ fontSize: "14px" }}>{category.name}</Box>
					</AccordionSummary>
					<AccordionDetails sx={{
						marginLeft: "6px",
						paddingTop: "0px"
					}}>
						{category.classificationTasks.map((task) => (
							<DropdownButton task={task} />
						))}
					</AccordionDetails>
				</Accordion>
			))}
		</Box>
  );
}


