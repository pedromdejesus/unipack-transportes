import './style.scss';
import '../../styles/global.scss'

const Footer: React.FC = () => {
	return (
		<>
			<div className="bg-footer">
				<div className="layout">
					<div className="row">
						<div className="col-6">
							<div className="footer d-flex align-items-center">
								<p>{'© 2024 Unipack Transportes'}</p>
								<p>{'|'}</p>
								<p>{'Todos os direitos reservados.'}</p>
							</div>
						</div>
						<div className="col-6">
							<div className="footer d-flex justify-content-end align-items-center">
								<p>Desenvolvido por</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
