import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import './global.sass';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<HomePage />
	</React.StrictMode>
);
