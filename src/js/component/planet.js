import React from "react";
import { Link } from "react-router-dom";
import "../../styles/card.scss";

export const Planet = props => {
	return (
		<div className="card" id="myCard">
			<img
				src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
				className="card-img-top mw-100 mh-100"
				alt="..."
			/>
			<div className="card-body" id="cardBody">
				<h5 className="card-title">Tatooine</h5>
				<p className="card-text">
					<ul>
						<li>Name: XXXXX</li>
						<li>Diamater: XXXXX</li>
						<li>Population: XXXXX</li>
					</ul>
				</p>

				<div className="d-inline-block">
					<Link to="planetView" className="btn-sm btn-primary">
						More
					</Link>
				</div>
				<div className="float-right d-inline-block">
					<button type="button" className="btn text-light " id="myFavorite">
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};
