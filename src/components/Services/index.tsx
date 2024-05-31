import Title from '../Title';
import ServiceCard from '../ServiceCard';
import '../../styles/global.scss'

const Services: React.FC = () => {
	return (
		<div className="secondary">
			<div className="layout">
				<div id='services' className="row services">
					<div className="col-12">
						<Title title="Serviços" />
						<div className="row">
							<div className="col-3">
								<ServiceCard />
							</div>
							<div className="col-3">
								<ServiceCard />
							</div>
							<div className="col-3">
								<ServiceCard />
							</div>
							<div className="col-3">
								<ServiceCard />
							</div>
						</div>
						<div className="row">
							<div className="col-3">
								<ServiceCard />
							</div>
							<div className="col-3">
								<ServiceCard />
							</div>
							<div className="col-3">
								<ServiceCard />
							</div>
							<div className="col-3">
								<ServiceCard />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
