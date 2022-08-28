import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from '../pages/register';

function RoutesMap() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export { RoutesMap };
