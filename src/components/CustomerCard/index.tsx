import './style.scss';

const CustomerCard: React.FC = () => {
	return (
		<div className="card">
			<div className="imageCard" />
			<div className="card-body d-flex justify-content-center">
				<p className="card-text">Nome</p>
			</div>
		</div>
	);
};

export default CustomerCard;
