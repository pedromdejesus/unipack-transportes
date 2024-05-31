import './style.scss';

interface IProps {
	title: string;
}

const SectionTitle: React.FC<IProps> = ({title}:IProps) => {
	return (
		<>
			<p className="title">{title}</p>
			<div className="border-title" />
		</>
	);
};

export default SectionTitle;
