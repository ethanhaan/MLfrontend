import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MLPanel from './pages/MLPanel/MLPanel';
import Popup from './components/Popup';
import { theme } from './providers/Theme';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import MainProvider from './providers/MainProvider';

const queryClient = new QueryClient();

function App() {
  return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
        <MainProvider>
          <Box sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <MLPanel/>
            <Popup />
          </Box>
        </MainProvider>
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
  );
}

export default App;
