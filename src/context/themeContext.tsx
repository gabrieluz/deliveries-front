import React, { createContext, ReactNode, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

interface themeProvider {
	children: ReactNode;
}

const ThemeContext = createContext({});

function useTheme() {
	const context = useContext(ThemeContext);
	return context;
}

function TProvider({ children }: themeProvider) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { TProvider, useTheme };
