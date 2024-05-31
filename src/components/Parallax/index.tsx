import './styles.scss'

const Parallax: React.FC = () => {
	return (
		<div className="parallax">
			<a
				className="layout d-flex justify-content-end align-items-center"
				href="#contact"
			>
				<button type="submit" className="btn btn-danger color">
					<p>FAÇA UM ORÇAMENTO</p>
				</button>
			</a>
		</div>
	);
};

export default Parallax;
