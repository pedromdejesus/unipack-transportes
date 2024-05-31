import './style.scss';

const ServiceCard: React.FC = () => {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<div className="row">
					<div className="col-6">
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</p>
					</div>
					<div className="col-6" />
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
