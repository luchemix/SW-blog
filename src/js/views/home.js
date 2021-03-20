import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "/workspace/react-hello-webapp/src/js/component/card.js";
import { Planet } from "/workspace/react-hello-webapp/src/js/component/planet.js";

export const Home = () => (
	<div className="text-center mt-3">
		<h1 className="text-light">Star Wars World</h1>
		<div className="text-light text-left">
			<div>
				<h3>Characters</h3>
			</div>
			<div id="cardRoll" className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
			</div>
		</div>
		<div className="text-light text-left">
			<div>
				<h3>Planets</h3>
			</div>
			<div id="planetRoll" className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
				<div className="col-3">
					<Planet />
				</div>
				<div className="col-3">
					<Planet />
				</div>
				<div className="col-3">
					<Planet />
				</div>
				<div className="col-3">
					<Planet />
				</div>
				<div className="col-3">
					<Planet />
				</div>
				<div className="col-3">
					<Planet />
				</div>
			</div>
		</div>
	</div>
);
