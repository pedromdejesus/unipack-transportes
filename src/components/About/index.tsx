import './styles.scss'
import Title from '../Title';
import aboutImg1 from '../../assets/images/about-1.jpeg'
import aboutImg2 from '../../assets/images/about-2.jpeg'
import aboutImg3 from '../../assets/images/about-3.jpeg'

const About: React.FC = () => {
	return (
		<div className="layout">
			<div id="about" className="row about">
				<div className="col-12">
					<Title title="Sobre" />
					<div className="row">
						<div className="col-lg-6 col-sm-12 col-xs-12">
							<h1 className="sub-title">Quem somos nós</h1>
							<p>
								A UNIPACK é uma empresa com longa experiência no
								ramo de transportes de cargas. Oferecemos uma
								estrutura administrativa e operacional
								capacitada para executar e assessorar a
								logística completa das operações do setor de
								transporte rodoviário.
							</p>
							<p>
								Coordenamos todo o processo dos serviços
								prestados, desenvolvendo projetos personalizados
								e específicos, de acordo com a necessidade e
								complexidade de cada cliente, enxergando as
								vontades e considerando as diferenças e
								particularidades de cada um.
							</p>
						</div>
						<div className="col-lg-3 col-sm-6 col-xs-12">
							<div>
								<img
									className="aboutImg"
									src={aboutImg1}
									alt="Imagem ilustrativa de guindaste levantando um container."
								/>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 col-xs-12">
							<div>
								<img
									className="aboutImg"
									src={aboutImg2}
									alt="Imagem ilustrativa de caminhão sendo abastecido com container."
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-sm-6 col-xs-12 values">
							<h1 className="sub-title">Valores</h1>
							<p>Relações solidárias </p>
							<p>Honestidade, confiança e satisfação </p>
							<p>Agilidade e segurança </p>
							<p>
								Ética, responsabilidade, respeito a clientes,
								funcionários, fornecedores e colaboradores
							</p>
							<p>Honrar o compromisso. </p>
						</div>
						<div className="col-lg-3 col-sm-6 col-xs-12">
							<div>
								<img
									className="aboutImg"
									src={aboutImg3}
									alt="Imagem ilustrativa de pessoa"
								/>
							</div>
						</div>
						<div className="col-lg-6 col-xs-12 objectives">
							<h1 className="sub-title">Objetivos</h1>
							<p>
								Ser reconhecida no mercado pela excelência no
								atendimento e prestação de serviços, oferecendo
								e integrando soluções eficientes para nossos
								clientes. Procuramos oferecer um atendimento
								primoroso com dedicação, segurança nas
								informações, controle da logística e
								flexibilidade na negociação para que possamos
								estreitar relacionamento, esclarecendo todas as
								dúvidas, refletindo confiança, qualidade,
								segurança e agilidade na execução dos serviços,
								proporcionar e garantir um negócio duradouro e
								sustentável ao longo do tempo.
							</p>
							<p>
								Realizando serviços de transportes com rapidez e
								segurança a Unipack, não tem fórmulas mágicas,
								mas com trabalho sério, simplicidade,
								transparência e controle dos processos, consegue
								desenvolver e aplicar soluções logísticas que
								atendem e garantem a satisfação de seus
								clientes. A Empresa executa todas as atividades
								ligadas a área de Importação e Exportação.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
