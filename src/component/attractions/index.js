import { Fragment } from "react";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import "./index.css";

export default function Attractions ({near}) {
	const Item = (item) => {
		return (
			<Fragment key={item.id} >
				<ListItem>
					<a href={item.link}>
						{item.name}
					</a>
				</ListItem>
			</Fragment>
		)		
	}

	return (
		<Box shadow className="list">
			<Heading border>
				Пам'ятки поблизу
			</Heading>

		{near.map(Item)}
					
		</Box>
	)
}