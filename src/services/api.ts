import axios from 'axios';

interface ICreateClient {
	username: string;
	password: string;
}

const app = axios.create({
	baseURL: 'http://localhost:3001',
	headers: { 'Content-Type': 'application/json' },
});

export async function CreateClient({ username, password }: ICreateClient) {
	const data = await app
		.post('/client', { username, password })
		.then(res => {
			return res.data;
		})
		.catch(err => {
			return err;
		});

	return data;
}
