import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/cardView.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardView = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div id="cardbody" className="container text-light border border-light rounded">
			<div id="name" className="text-center w-25">
				<h4>Name</h4>
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
					<img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/5F17/production/_110234342_mv5botkxmzc0mdg5mv5bml5banbnxkftztcwnjuxmza4na--._v1_sy1000_cr0014841000_al_.jpg" />
				</div>
			</div>
		</div>
	);
};
