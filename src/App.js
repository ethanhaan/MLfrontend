import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MLPanel from './pages/MLPanel/MLPanel.js';
import { theme } from './providers/Theme.js';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import logo from './logo.svg';

const queryClient = new QueryClient();

function App() {
  return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Box sx={{
					width: "100vw",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}>
					<MLPanel/>
				</Box>
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
  );
}

export default App;
