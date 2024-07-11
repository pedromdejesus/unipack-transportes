import './style.scss';
import '../../styles/global.scss'

const Footer: React.FC = () => {
	return (
		<>
			<div className="bg-footer">
				<div className="layout">
					<div className="row">
						<div className="col-lg-6 col-sm-6 col-xs-12">
							<div className="footer left-footer">
								<p>{'© 2024 Unipack Transportes | Todos os direitos reservados.'}</p>
							</div>
						</div>
						<div className="col-lg-6 col-sm-6 col-xs-12">
							<div className="footer right-footer">
								<p className='secondary-text'>Desenvolvido por</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
