import "./technologies.css";

import TechIcons from "../../components/TechIcons/TechIcons";

function Technologies() {
		

		return (
			<section className="technologies">
				<h2 className="technologies__title">
					<span className="technologies__title-gradient">TECHNOLOGIES</span>
				</h2>
				<p className="technologies__desc">
					Les outils et technologies que j'utilise pour créer des sites web modernes et performants.:
				</p>
				<TechIcons />
			</section>
		);
}

export default Technologies;
