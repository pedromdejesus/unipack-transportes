import './style.scss';

interface ICustomerCardProps {
	title: string;
	imgSrc: string;
	imgAlt: string;
}

const CustomerCard: React.FC<ICustomerCardProps> = ({title, imgSrc, imgAlt}:ICustomerCardProps) => {
	return (
		<div className="card">
			<div className="imageCard d-flex justify-content-center align-items-center">
				<img src={imgSrc} alt={imgAlt} />
			</div>
			<div className="card-body d-flex justify-content-center">
				<p className="card-text">{title}</p>
			</div>
		</div>
	);
};

export default CustomerCard;
