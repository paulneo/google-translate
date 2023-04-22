import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import App from './App.tsx';
import './index.css';

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
};

const styles = {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	global: (props: any) => ({
		body: {
			fontFamily: 'body',
			color: mode('gray.400', 'whiteAlpha.900')(props),
			bg: props.colorMode === 'dark' ? 'white' : 'gray.800',
			lineHeight: 'base',
		},
		'*::placeholder': {
			color: mode('gray.400', 'whiteAlpha.400')(props),
		},
		'*, *::before, &::after': {
			borderColor: mode('gray.200', 'whiteAlpha.300')(props),
			wordWrap: 'break-word',
		},
	}),
};
const theme = extendTheme({ colors, styles });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
);
