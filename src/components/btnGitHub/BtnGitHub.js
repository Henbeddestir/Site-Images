import "./style.css"

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<b>Download</b>
		</a>
	);
};

export default BtnGitHub;