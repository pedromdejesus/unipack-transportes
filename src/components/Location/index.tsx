import Title from '../Title';
import './style.scss';

const Location: React.FC = () => {
	return (
		<div id='location' className="secondary">
			<div className="layout">
				<div className="row location">
					<div className="col-12">
						<Title title="Localização" />
						<div className="row">
							<p>
								{'Rua Martim Affonso, N.º24 - Cj 62, Centro, Santos-SP, 11010-060'}
							</p>
							<div className="map" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Location;
