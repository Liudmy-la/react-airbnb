import "./index.css";

export default function Houselord({contact}) {
	return (
		<div className="contact">
			<div className="contact__block">
				<img src={contact.image} alt="Houselord" width={80} height={80}  className="contact__img"></img>
				<div className="contact__details">
					<span className="contact__title">Господар – {contact.name}</span>
					<div className="contact__data">
						<span className="contact__data--value">{contact.phone}</span>
						<span className="contact__data--value">{contact.response_time}</span>
						<span className="contact__data--value">{contact.response_rate}% швидкість відгуку</span>
					</div>
				</div>
			</div>
			<span className="contact__info">{contact.info}</span>
		</div>
	)
}