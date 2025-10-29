import "./card.css";

function Card({ icon, title, description }) {
	return (
		<div className="card">
			<div className="card__icon">{icon}</div>
			<div className="card__content">
				<h3 className="card__title">{title}</h3>
				<p className="card__desc">{description}</p>
			</div>
		</div>
	);
}

export default Card;
