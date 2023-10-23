import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import pool from "./pool.svg"
import gym from "./gym.svg"
import freeBreakfast from "./freeBreakfast.svg"
import freeWiFi from "./freeWiFi.svg"
import parking from "./parking.svg"
import petsAllowed from "./petsAllowed.svg"
import airportShuttle from "./airportShuttle.svg"
import conciergeService from "./conciergeService.svg"
import roomService from "./roomService.svg"
import childFriendly from "./childFriendly.svg"
      

import "./index.css";

export default function Amenities ({
	hasPool,
	hasGym,
	hasFreeBreakfast,
	hasFreeWiFi,
	hasParking,
	hasPetsAllowed,
	hasAirportShuttle,
	hasConciergeService,
	hasRoomService,
	hasChildFriendly,
}) {
	return (
		<Box shadow className="list">
			<Heading border>
				Зручності
			</Heading>
			
			{hasPool
				? <ListItem imageSrc={pool}><span>Басейн</span></ListItem>
				: ""
			}
			{hasGym
				? <ListItem imageSrc={gym}><span>Спортивний зал</span></ListItem>
				: ""
			}
			{hasFreeBreakfast
				? <ListItem imageSrc={freeBreakfast}><span>Безкоштовний сніданок</span></ListItem>
				: ""
			}
			{hasFreeWiFi
				? <ListItem imageSrc={freeWiFi}><span>Безкоштовний Wi-Fi</span></ListItem>
				: ""
			}
			{hasParking
				? <ListItem imageSrc={parking}><span>Безкоштовний вуличний паркінг</span></ListItem>
				: ""
			}
			{hasPetsAllowed
				? <ListItem imageSrc={petsAllowed}><span>Дозволено розміщення з домашніми тваринами</span></ListItem>
				: ""
			}
			{hasAirportShuttle
				? <ListItem imageSrc={airportShuttle}><span>Трансфер до/з аеропорту</span></ListItem>
				: ""
			}
			{hasConciergeService
				? <ListItem imageSrc={conciergeService}><span>Консьєрж-сервіс</span></ListItem>
				: ""
			}
			{hasRoomService
				? <ListItem imageSrc={roomService}><span>Обслуговування номерів</span></ListItem>
				: ""
			}
			{hasChildFriendly
				? <ListItem imageSrc={childFriendly}><span>Підходить для дітей</span></ListItem>
				: ""
			}
		</Box>
	)
}