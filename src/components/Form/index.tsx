import './style.scss';
import '../../styles/global.scss'

const Form: React.FC = () => {
	return (
		<form>
			<div className="row">
				<div className="col-6">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Nome"
						/>
					</div>
				</div>
				<div className="col-6">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Nome da Empresa"
						/>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="CNPJ"
						/>
					</div>
				</div>
				<div className="col-6">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="E-mail"
						/>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Telefone"
						/>
					</div>
				</div>
				<div className="col-6">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Assunto"
						/>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="form-group">
					<input
						type="text"
						className="form-control textarea"
						id="exampleFormControlInput1"
						placeholder="Mensagem"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<button type="submit" className="btn color">
						<p>Enviar</p>
					</button>
				</div>
			</div>
		</form>
	);
};

export default Form;
