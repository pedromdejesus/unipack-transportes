import { useState } from 'react';
import './index.scss';
import Header from '../../components/Header';

function HomePage() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header />
		</>
	);
}

export default HomePage;
