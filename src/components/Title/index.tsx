import './style.scss';

interface ITitleProps {
	title: string;
}

const SectionTitle: React.FC<ITitleProps> = ({title}:ITitleProps) => {
	return (
		<>
			<p className="title">{title}</p>
			<div className="border-title" />
		</>
	);
};

export default SectionTitle;
