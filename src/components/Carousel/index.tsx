import './styles.scss'
import carouselImg1 from '../../assets/images/carousel-1.jpeg';
import carouselImg2 from '../../assets/images/carousel-2.png';

const Carousel: React.FC = () => {
	function nav(id: string) {
		const element = document.getElementById(id);
		if(element) {
			window.scrollTo(0, element.offsetTop - 80);
		}
	}

	return (
		<div>
			<div id="carouselExample" className="carousel slide">
				<div className="bg-carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src={carouselImg1}
								className="d-block carousel-img"
								alt="Slide 1"
							/>
							<div className="bg-carousel-img" />
							<div className="card-carousel carousel-caption d-none d-md-block">
								<h5>UNIPACK TRANSPORTES</h5>
								<p>
									PARA CADA NECESSIDADE, UMA SOLUÇÃO DE
									QUALIDADE
								</p>
								<button onClick={() => nav('services')} className="btn">
									<p>VEJA NOSSOS SERVIÇOS</p>
								</button>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src={carouselImg2}
								className="d-block carousel-img"
								alt="Slide 2"
							/>
							<div className="bg-carousel-img" />
							<div className="card-carousel carousel-caption d-none d-md-block">
								<h5>UNIPACK TRANSPORTES</h5>
								<p>
									PARA CADA NECESSIDADE, UMA SOLUÇÃO DE
									QUALIDADE
								</p>
								<button type="submit" className="btn">
									<p>VEJA NOSSOS SERVIÇOS</p>
								</button>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100"
								className="d-block w-100 carousel-img"
								alt="Slide 3"
							/>
							<div className="bg-carousel-img" />
							<div className="card-carousel carousel-caption d-none d-md-block">
								<h5>UNIPACK TRANSPORTES</h5>
								<p>
									PARA CADA NECESSIDADE, UMA SOLUÇÃO DE
									QUALIDADE
								</p>
								<button type="submit" className="btn">
									<p>VEJA NOSSOS SERVIÇOS</p>
								</button>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExample"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						/>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExample"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						/>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Carousel;

