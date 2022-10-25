import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import ReactGA from 'react-ga4';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import './styles/global.css';

ReactGA.initialize('G-4R4BFNFWP0');

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
