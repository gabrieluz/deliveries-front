import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		isDark: boolean;
		colors: {
			ola: string;
		};
	}
}
