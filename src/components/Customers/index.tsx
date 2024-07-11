import Title from '../Title';
import CustomerCard from '../CustomerCard';
import '../../styles/global.scss'
import imgPurea from '../../assets/images/purea-logo.jpeg';
import imgTupy from '../../assets/images/tupy-logo.jpeg';
import imgOpetra from '../../assets/images/duoflex-logo.jpeg';
import imgDamarfe from '../../assets/images/damarfe-logo.jpeg';

const Customers: React.FC = () => {
	return (
		<div id="customers" className="layout">
			<div className="row customers">
				<div className="col-12">
					<Title title="Clientes" />
					<div className="row">
						<div className="col-lg-3 col-sm-6 col-xs-12">
							<CustomerCard
								title="Purea"
								imgSrc={imgPurea}
								imgAlt="Logotipo da Purea"
							/>
						</div>
						<div className="col-lg-3 col-sm-6 col-xs-12">
							<CustomerCard
								title="Tupy"
								imgSrc={imgTupy}
								imgAlt="Logotipo da Tupy"
							/>
						</div>
						<div className="col-lg-3 col-sm-6 col-xs-12">
							<CustomerCard
								title="Opetra"
								imgSrc={imgOpetra}
								imgAlt="Logotipo da Opetra"
							/>
						</div>
						<div className="col-lg-3 col-sm-6 col-xs-12">
							<CustomerCard
								title="Damarfe"
								imgSrc={imgDamarfe}
								imgAlt="Logotipo da Damarfe"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Customers;
