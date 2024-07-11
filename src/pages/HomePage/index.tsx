import '../../styles/global.scss'
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import About from '../../components/About';
import Services from '../../components/Services';
import Parallax from '../../components/Parallax';
import Customers from '../../components/Customers';
import Location from '../../components/Location';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

function HomePage() {
	return (
		<>
			{/* <Header /> */}
			{/* <Carousel /> */}
			<About />
			<Services />
			<Parallax />
			<Customers />
			<Location />
			<Contact />
			<Footer />
		</>
	);
}

export default HomePage;
