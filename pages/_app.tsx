import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
