import Title from '../Title';
import CustomerCard from '../CustomerCard';
import '../../styles/global.scss'

const Customers: React.FC = () => {
	return (
		<div id='customers' className="layout">
			<div className="row customers">
				<div className="col-12">
					<Title title="Clientes" />
					<div className="row">
						<div className="col-3">
							<CustomerCard />
						</div>
						<div className="col-3">
							<CustomerCard />
						</div>
						<div className="col-3">
							<CustomerCard />
						</div>
						<div className="col-3">
							<CustomerCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Customers;
