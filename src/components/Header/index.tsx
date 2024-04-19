import './style.scss';

const Header: React.FC = () => {
	return (
		<div className="header-wrap">
			<nav className="navbar sticky-top bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Fixed top
					</a>
				</div>
			</nav>
		</div>
	);
};

export default Header;
