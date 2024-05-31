import './styles.scss'

const Parallax: React.FC = () => {
	function nav(id: string) {
		const element = document.getElementById(id);
		if(element) {
			window.scrollTo(0, element.offsetTop - 160);
		}
	}

	return (
		<div className="parallax">
			<p
				className="layout d-flex justify-content-end align-items-center"
			>
				<button onClick={() => nav('contact')} type="submit" className="btn btn-danger color">
					<p>FAÇA UM ORÇAMENTO</p>
				</button>
			</p>
			<div className="bg-parallax" />
		</div>
	);
};

export default Parallax;
