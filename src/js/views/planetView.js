import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/planetView.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetView = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div id="cardbody" className="container text-light border border-light rounded">
			<div id="name" className="text-center w-25">
				<h4>{store.planets[params.theid].name}</h4>
			</div>
			<div id="info" className="row">
				<div id="data" className="col-6">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus vel massa eget luctus.
					Integer tristique lacinia vulputate. Sed egestas magna sit amet elit vulputate, id consequat odio
					sagittis. Curabitur tincidunt molestie leo. Vestibulum ultrices felis ac luctus mattis. Cras
					volutpat vel purus non semper. Quisque pulvinar, est non ornare fermentum, nisl ipsum interdum
					tortor, eget finibus quam libero eget arcu. Nam lectus sem, laoreet eu metus id, ornare accumsan
					risus. Curabitur mattis congue diam. Aliquam ut dolor augue. Duis egestas fermentum neque id ornare.
					Quisque erat mauris, pulvinar sit amet lorem sed, mollis accumsan neque. Sed ut ipsum ex. Vivamus
					sit amet ante nibh.
				</div>
				<div id="photo" className="col-6">
					<img src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" />
				</div>
			</div>
			<div className="row justify-content-center">
				<ul className="list-group list-group-horizontal bg-dark">
					<li className="list-group-item list-group-item-dark border border-light text-center">
						Population: {store.planets[params.theid].population}
					</li>
					<li className="list-group-item list-group-item-dark border border-light text-center">
						Climate: {store.planets[params.theid].climate}
					</li>
					<li className="list-group-item list-group-item-dark border border-light text-center">
						Terrain: {store.planets[params.theid].terrain}
					</li>
					<li className="list-group-item list-group-item-dark border border-light text-center">
						Diamater: {store.planets[params.theid].diameter}
					</li>
					<li className="list-group-item list-group-item-dark border border-light text-center">
						Gravity: {store.planets[params.theid].gravity}
					</li>
					<li className="list-group-item list-group-item-dark border border-light text-center">
						Rotation Period: {store.planets[params.theid].rotation_period}
					</li>
					<li className="list-group-item list-group-item-dark border border-light text-center">
						Orbital Period: {store.planets[params.theid].orbital_period}
					</li>
				</ul>
			</div>
		</div>
	);
};
