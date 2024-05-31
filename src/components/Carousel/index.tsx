import './styles.scss'

const Carousel: React.FC = () => {
	return (
		<div>
			<div id="carouselExample" className="carousel slide bg-carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?fit=crop&w=1964&q=100"
							className="d-block w-100 carousel-img"
							alt="Slide 1"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?fit=crop&w=2134&q=100"
							className="d-block w-100 carousel-img"
							alt="Slide 2"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?fit=crop&w=2070&q=100"
							className="d-block w-100 carousel-img"
							alt="Slide 3"
						/>
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
	);
};

export default Carousel;

