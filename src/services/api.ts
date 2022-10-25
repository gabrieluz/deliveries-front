import axios from 'axios';

interface ICreateClient {
	username: string;
	password: string;
}

const app = axios.create({
	baseURL: 'http://localhost:3001',
	headers: { 'Content-Type': 'application/json' },
});

export async function CreateUser(
	{ username, password }: ICreateClient,
	isDeliveryman: boolean
) {
	const data = await app.post(`${isDeliveryman ? '/deliveryman' : '/client'}`, {
		username,
		password,
	});

	return data;
}

export async function Login(
	{ username, password }: ICreateClient,
	isDeliveryman: boolean
) {
	const data = await app.post(
		`${isDeliveryman ? '/deliveryman' : '/client'}/authenticate/`,
		{ username, password }
	);

	return data;
}
