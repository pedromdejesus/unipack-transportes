import './style.scss';
import '../../styles/global.scss'
import logo from '../../assets/images/logo.png';

const Location: React.FC = () => {
	function nav(id: string) {
		const element = document.getElementById(id);
		if(element) {
			window.scrollTo(0, element.offsetTop - 80);
		}
	}

	return (
		<>
			<div className='position-fixed'>
				<div className="bg-sub-header">
					<div className="layout">
						<div className="sub-header">
							<p>{'(13) 3232-2330'}</p>
							<p>{'|'}</p>
							<p>{'(13) 99753-2220'}</p>
							<p>{'|'}</p>
							<p>{'operacional@unipacktransportes.com.br'}</p>
						</div>
					</div>
				</div>
				<div className="header">
					<div className="layout">
						<div className="row">
							<div className="col-12">
								<div className="row">
									<div
										className="col-lg-2 col-xs-12 d-flex justify-content-center align-items-center"
										onClick={() => window.scrollTo(0, 0)}
									>
										<div>
											<img
												src={logo}
												alt="Logotipo da Unipack Transportes"
											/>
										</div>
									</div>
									<div
										className="col-lg-2 col-xs-12 d-flex justify-content-center align-items-center"
										onClick={() => nav('about')}
									>
										<p>Sobre</p>
									</div>
									<div
										className="col-lg-2 col-xs-12 d-flex justify-content-center align-items-center"
										onClick={() => nav('services')}
									>
										<p>Serviços</p>
									</div>
									<div
										className="col-lg-2 col-xs-12 d-flex justify-content-center align-items-center"
										onClick={() => nav('customers')}
									>
										<p>Clientes</p>
									</div>
									<div
										className="col-lg-2 col-xs-12 d-flex justify-content-center align-items-center"
										onClick={() => nav('location')}
									>
										<p>Localização</p>
									</div>
									<div
										className="col-lg-2 col-md-12 d-flex justify-content-center align-items-center"
										onClick={() => nav('contact')}
									>
										<p>Contato</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Location;
