import { Fragment } from "react";
 
import Heading from "../heading"
import Box from "../box";

import "./index.css";

export default function Reviews({reviewList}) {
	return <div className="review__block">
		<Heading>Відгуки клієнтів</Heading>

		<div className="review__list">
			{reviewList.map(({id, ...rest}) => (
				<Fragment key={id}>
					<Item {...rest} />
				</Fragment>
			))}
		</div>
	</div>
}

function Item ({guestName, rating, review}) {
	return (
		<Box className="review">
			<div className="author__block">
				<span className="review__author">{guestName}</span>
				<span className="review__info">Рейтинг: {rating}</span>
			</div>
			<span className="review__info">{review}</span>
		</Box>
	)
}