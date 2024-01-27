import { Box } from '@mui/material';
import Model from '../Model/Model';
import Settings from '../Settings/Settings';

export default () => {

	return (
    <Box sx={{
      width: "90%",
      height: "clamp(50%, 600px, 90%)",
      display: "flex",
      gap: "36px",
    }}>
      <Settings/>
      <Model />
    </Box>
	)
}
