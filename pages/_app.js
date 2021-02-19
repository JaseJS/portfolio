import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import portfolioTheme from '../theme/portfolio';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={portfolioTheme}>
			<CSSReset />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
