import React from 'react';
import GlobalStyle from './styles/GlobalStyle';

import Routes from './routes';
import { ToastContainer, toast } from 'react-toastify';

import Nav from './components/Nav';

export default function App() {
	return (
		<>
			<Nav/>
			<GlobalStyle/>
			<Routes />
			<ToastContainer
				autoClose={1000}
				position="top-right"
				className="toast-container"/>
		</>
		
	);
}