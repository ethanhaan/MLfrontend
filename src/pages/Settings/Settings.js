import { useContext } from 'react';
import DropdownNested from './components/DropdownNested.js';
import Mainframe from '../../components/Mainframe.js';
import Heading from '../../components/Heading.js';
import Subheading from '../../components/Subheading.js';
import { Box, Autocomplete, TextField, InputBase, Button, Select, MenuItem, Switch } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MainContext } from '../../providers/MainProvider';

export default () => {

	const theme = useTheme();
	const { main, setMain } = useContext(MainContext);

	return (
		<Mainframe sx={{
			width: "280px",
			display: "flex",
			flexDirection: "column",
		
		}}>
			<Heading sx={{
				marginBottom: "42px"
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
		</Mainframe>
	)
}
