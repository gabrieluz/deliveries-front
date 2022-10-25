import { ReactNode } from 'react';
import { TProvider } from './themeContext';
import { UserProvider } from './userContext';

interface IContext {
	children: ReactNode;
}

function Context({ children }: IContext) {
	return (
		<TProvider>
			<UserProvider>{children}</UserProvider>
		</TProvider>
	);
}

export { Context };
