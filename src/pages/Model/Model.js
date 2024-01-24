import Mainframe from '../../components/Mainframe';
import { useEffect, useState, useContext} from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { MainContext } from '../../providers/MainProvider';
import ImdbRatingsParent from './features/imdb_ratings/ImdbRatingsParent';
import BreadCrumbs from './features/BreadCrumbs';

export default () => {

	const theme = useTheme();
	const { main, setMain } = useContext(MainContext);

	return (
		<Mainframe sx={{
			flex: 3.5,
			paddingLeft: '0px',
      display: "flex",
      flexDirection: "column",
		}}>
      <Box sx={{ 
        marginLeft: "36px",
        paddingBottom: "12px",
        borderBottom: "solid 1px #3b3b3b",
      }}>
        <BreadCrumbs />
      </Box>
      <Box sx={{
        position: "relative",
        height: "100%",
      }}>
        { main.model === "IMDB Ratings" && (
          <ImdbRatingsParent />
        )}
      </Box>
		</Mainframe>
	)
}
