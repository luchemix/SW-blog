import React from "react";
import { Link } from "react-router-dom";
import "../../styles/card.scss";

export const Card = props => {
	return (
		<div className="card" id="myCard">
			<img
				src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg"
				className="card-img-top mw-100 mh-100"
				alt="..."
			/>
			<div className="card-body" id="cardBody">
				<h5 className="card-title">Darth</h5>
				<p className="card-text">
					<ul>
						<li>Name: XXXXX</li>
						<li>Homeworld: XXXXX</li>
						<li>Specie: XXXXX</li>
					</ul>
				</p>

				<div className="d-inline-block">
					<Link to="/cardView" className="btn-sm btn-primary">
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
