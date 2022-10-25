import { ToastContainer } from 'react-toastify';
import { Context } from './context';
import { RoutesMap } from './routes';

function App() {
	return (
		<Context>
			<RoutesMap />
			<ToastContainer
				position='top-right'
				autoClose={2500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</Context>
	);
}

export { App };
