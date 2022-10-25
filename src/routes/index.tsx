import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Main } from '../pages/main';
import { Login } from '../pages/login';
import { Register } from '../pages/register';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

function RoutesMap() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export { RoutesMap };
