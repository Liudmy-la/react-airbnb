import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import guest from "./guests.svg"
import bedroom from "./bedrooms.svg"
import bed from "./beds.svg"
import bath from "./baths.svg"

import "./index.css";

export default function PropDetails ({guests, bedrooms, beds, baths}) {
	return (
		<Box shadow className="list">
			<Heading border>
				Деталі помешкання
			</Heading>

			<ListItem imageSrc={guest}>
				<span>{guests} гості </span>
			</ListItem>
			<ListItem imageSrc={bedroom}>
				<span>{bedrooms} спальня</span>
			</ListItem>
			<ListItem imageSrc={bed}>
				<span>{beds} ліжко</span>
			</ListItem>
			<ListItem imageSrc={bath}>
				<span>{baths} ванна кімната</span>
			</ListItem>
		</Box>
	)
}