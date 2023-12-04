import { useContext } from 'react';
import DropdownNested from './components/DropdownNested.js';
import Mainframe from '../../components/Mainframe.js';
import Heading from '../../components/Heading.js';
import Subheading from '../../components/Subheading.js';
import { Box, Autocomplete, TextField, InputBase, Button, Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MainContext } from '../MLPanel/MLPanel.js';

export default () => {

	const theme = useTheme();
	const { main, setMain } = useContext(MainContext);

	return (
		<Mainframe sx={{
			flex: 2,
			display: "flex",
			flexDirection: "column",
		
		}}>
			<Heading sx={{
				marginBottom: "24px"
			}}>
				ML Selection Portal
			</Heading>
			<Subheading sx={{
				marginBottom: "12px",
				paddingBottom: "12px",
				borderBottom: "solid 1px #3b3b3b"
			}}>
				Classification Task
			</Subheading>
			<DropdownNested />
			<Subheading sx={{
				marginTop: "18px",
				marginBottom: "12px",
			}}>
				Classifier/Model
			</Subheading>
			<Select
				value={main.selectedClassifier}
				onChange={(event)=>{setMain({...main, selectedClassifier: event.target.value })}}
				displayEmpty
				sx={{ height: "36px", width: "100%" }}
			>
				{main.modelsAvailable.map((model) => (
					<MenuItem value={model}>{model}</MenuItem>
				))}
			</Select>
		</Mainframe>
	)
}
