import './style.scss'
import '../../styles/global.scss'
import Title from '../Title';
import Form from '../Form';

const Contact: React.FC = () => {
	return (
		<div id='contact' className="layout">
			<div className="row contact">
				<div className="col-12">
					<Title title="Contato" />
					<div className="row">
						<div className="col-6">
							<h1 className="sub-title">Fale Conosco</h1>
							<Form />
						</div>
						<div className="col-6">
							<div className="row">
								<div className="col-6">
									<h1 className="sub-title">
										Telefone e WhatsApp
									</h1>
									<div className="card">
										<div className="card-body d-flex justify-content-center align-items-center">
											<p>
												This is some text within a card
												body.
											</p>
										</div>
									</div>
									<div className="card">
										<div className="card-body d-flex justify-content-center align-items-center">
											<p>
												This is some text within a card
												body.
											</p>
										</div>
									</div>
								</div>
								<div className="col-6">
									<h1 className="sub-title">
										Horário de Atendimento
									</h1>
									<div className="card hours">
										<div className="card-body d-flex justify-content-center align-items-center">
											<p>
												This is some text within a card
												body.
											</p>
										</div>
									</div>
								</div>
								<div className="col-6">
									<h1 className="sub-title">
										Trabalhe Conosco
									</h1>
									<p>
										Se você se identifica com nosso perfil e
										quer trabalhar conosco, envie seu
										currículo para o e-mail abaixo,
										indicando o seu ramo de atuação no
										“assunto” de seu e-mail.
									</p>
									<div className="card">
										<div className="card-body d-flex justify-content-center align-items-center">
											<p>
												This is some text within a card
												body.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
