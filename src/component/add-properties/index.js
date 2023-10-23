import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import "./index.css";

export default function AddProperties ({rules, cancellation, transport, lang, offers, instrustions='За домовленістю'}) {
	return (
		<Box shadow className="list">
			<Heading border>
				Додаткові властивості
			</Heading>

			<ListItem title="Правила дому:">
				<span>{rules}</span>
			</ListItem>
			<ListItem title="Політика скасування:">
				<span>{cancellation}</span>
			</ListItem>
			<ListItem title="Місцевий транспорт:">
				<span>{transport}</span>
			</ListItem>
			<ListItem title="Мови хоста:">
				<span>{lang}</span>
			</ListItem>
			<ListItem title="Спеціальні пропозиції:">
				<span>{offers}</span>
			</ListItem>
			<ListItem title="Інструкції щодо реєстрації:">
				<span>{instrustions}</span>
			</ListItem>
		</Box>
	)
}