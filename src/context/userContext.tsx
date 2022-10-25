import React, { createContext, ReactNode, useState, Dispatch } from 'react';

interface userProvider {
	children: ReactNode;
}

interface IUserData {
	token?: string;
	data?: any;
}

interface IUser {
	user: IUserData;
	setUser: Dispatch<React.SetStateAction<object>>;
}

const UserContext = createContext<IUser>({
	user: {},
	setUser: () => {},
});

function UserProvider({ children }: userProvider) {
	const [user, setUser] = useState({});

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

export { UserProvider, UserContext };
